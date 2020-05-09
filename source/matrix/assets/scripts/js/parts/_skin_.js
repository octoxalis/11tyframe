var SKIN_o = Object.create( null )



//> Open IndexedDB
//> to store UI base color + light/dark mode
SKIN_o.idb_o = new KVIdb( '{{A_o.ID_s}}_idb', '{{A_o.ID_s}}_store', )



SKIN_o.hueBase__v = hue_n =>    //: if page load, mode_n undefined (no parameter)
{
  SKIN_o.idb_o.get__( 'hue_base' )
    .then( current_n =>
    {
      if ( hue_n === undefined ) hue_n = current_n || +'{{C_o.HUE_BASE_n}}'  //: at page load only
      SKIN_o.idb_o.set__v( 'hue_base', hue_n )
      DOM_o.rootVar__v( '--c_hue_base', hue_n )
      //-- console.log( `Base hue has been set to: ${hue_n}` )
    } )
}



SKIN_o.lumMode__v = mode_n =>    //: if page load, mode_n undefined (no parameter)
{
  SKIN_o.idb_o.get__( 'lum_mode' )
    .then( current_n =>
    {
      if ( mode_n === undefined ) mode_n = current_n || +'{{C_o.LUM_MODE_n}}'
      SKIN_o.idb_o.set__v( 'lum_mode', mode_n )
      DOM_o.rootVar__v( '--lum_mode', mode_n )
      //-- console.log( `Luminosity mode has been set to: ${mode_n} ${mode_n > 0 ?  '(LIGHT)' : '(DARK)'} ` )
    } )
}
