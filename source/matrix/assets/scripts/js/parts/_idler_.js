/**
 * Queue (LILO || LIFO) of requestIdleCallback functions
 */

class Idler
{
  // handle_n
  // state_o

  constructor ( { assure_b=false, timer_n=0, } = {} )
  {

    this.timer_n      = timer_n
    this.assure_b     = assure_b
    this.queue_a      = []
    this.running_b    = false
    this.run__v        = this.run__v.bind( this )
    this.visibility__v = this.visibility__v.bind( this )
    if ( this.assure_b ) addEventListener( 'visibilitychange', this.visibility__v, true )
  }



  add__v ( task_f, queue_s='LILO' )
  {
    let at_n = this.queue_a.length
    if ( queue_s === 'LIFO' )
    {
      let length_n = at_n + 1
      while ( --length_n ) this.queue_a[length_n] = this.queue_a[length_n-1]
      at_n = 0
    }
    const state_o =
    {
      time: performance.now(),
      visibilityState: document.visibilityState,
    }
    this.queue_a[at_n] = { state_o, task_f }
    this.schedule__v()
  }



  /**
   * Schedules the task queue to be processed.
   * If the document is in the visible state, `requestIdleCallback` is used.
   * If the document is in the hidden state,
   * the queue is scheduled as a microtask
   * so it can be run in cases where a macrotask couldn't
   * (like if the page is unloading).
   */

  schedule__v ()
  {
    if (this.assure_b && document.visibilityState === 'hidden') return void Promise.resolve().then( this.run__v )
    //>
    if ( !this.handle_n ) this.handle_n = requestIdleCallback( this.run__v )
  }


  /**
   * Runs as many tasks in the queue as it can (FIFO)
   * before reaching the deadline.
   * If no deadline is passed, it will run all tasks.
   * If an `IdleDeadline` object is passed (as is with `requestIdleCallback`),
   * the tasks are run until there's no time remaining,
   * at which point we yield to input or other script
   * and wait until the next idle time.
   */

  run__v ( deadline_o=undefined )
  {
    this.cancel__v()
    if ( this.running_b ) return
    //>
    this.running_b = true
    while ( this.queue_a.length > 0 &&
            deadline_o && deadline_o.timeRemaining() <= this.timer_n )
    {
      const { task_f, state_o } = this.queue_a.shift()
      this.state_o = state_o
      task_f( state_o )
      this.state_o = null
    }
    this.running_b = false
    if ( this.queue_a.length > 0 ) this.schedule__v()    //: Schedule the rest of the tasks for the next idle time.
  }



  /**
   * A callback for the `visibilitychange` event
   * runs all pending callbacks immediately
   * if the document's visibility state is hidden.
   */

  visibility__v ()
  {
    if (document.visibilityState !== 'hidden') return
    //>
    this.run__v()    //: By not passing a deadline, all tasks will be run sync
  }



  /**
   * Returns the state object for the currently running task.
   * If no task is running, null is returned.
   */

  state__o ()
  {
    return this.state_o
  }



  cancel__v ()
  {
    cancelIdleCallback( this.handle_n )
    this.handle_n = 0    //: cancelIdleCallback always return a positive Number > 0
  }



  /**
   * Clears all pending tasks for the queue.
   * Stops any scheduled tasks from running.
   */

  stop__v ()
  {
    this.queue_a = []
    this.cancel__v()
  }



  /**
   * Destroys the instance
   * by unregistering all added event listeners and
   * removing any overridden methods.
   */
  destroy__v ()
  {
    this.queue_a = []
    this.cancel__v()
    if ( this.assure_b ) removeEventListener( 'visibilitychange', this.visibility__v, true )
  }

}



/**
 * Value initialized when idle.
 */

class IdlerVal
{
  value_
  
  constructor ( init_f )
  {
    this.init_f   = init_f
    this.handle_n = requestIdleCallback( () => this.value_ = this.init_f() )
  }



  /**
   * Returns the value if it's already been initialized.
   * If it hasn't then the initializer function is run immediately
   * and the pending idle callback is cancelled.
   */

  get__ ()
  {
    if ( this.value_ === undefined )
    {
      this.cancel__v()
      this.value_ = this.init_f()
    }
    return this.value_
  }



  set__v ( value_ )
  {
    this.cancel__v()
    this.value_ = value_
  }



  cancel__v ()
  {
    if ( !this.handle_n ) return
    //>
    cancelIdleCallback( this.handle_n )
    this.handle_n = null
  }
}
