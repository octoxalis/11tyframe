const dayjs_o  = require( 'dayjs' )
require( 'dayjs/locale/fr' )


const ISODate__s = ( iso_s=new Date().toISOString(), locale_s="fr-FR" ) =>
{
  const format_o = { month: "long", day: "numeric", year: "numeric" }
  const date_o = new Date( iso_s )
  return new Intl.DateTimeFormat( locale_s, format_o )
    .format( date_o )
}


module.exports =
{
  locale__o: () =>
  {
    const rawNow = new Date()
    const yearNow = rawNow.getFullYear()
    const rawMonth = rawNow.getMonth() + 1
    const monthNow = ( rawMonth < 10 ) ? `0${rawMonth}` : `${rawMonth}`
    const rawDay = rawNow.getDate()
    const dayNow = ( rawDay < 10 ) ? `0${rawDay}` : `${rawDay}`
    const now_s = `${yearNow}-${monthNow}-${dayNow}`
    const locale_s = rawNow.toLocaleString( 'fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' } )
    //........const locale_s = rawNow.toLocaleString( 'fr-FR', { year: 'numeric', month: 'long', day: 'numeric' } )
      //;console.log( `date: ${now_s} -- ${locale_s}` )
    return { now_s: now_s, locale_s: locale_s }
  },

  dayDate__s: () => dayjs_o().locale( 'fr' ).format( 'D MMMM YYYY' ),
  //... dayDate__s: () => ISODate__s(),  // BUG: "February 20, 2020"

}
