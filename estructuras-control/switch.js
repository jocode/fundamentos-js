var signo = prompt('¿Cuál es tu signo?');

switch(signo){
  case 'libra':
    console.log("Es necesario que actives tu vida social, recuerda que la popularidad forma parte del éxito. Como eres encantador y cautivas por tu bondad, esto te facilita aclarar malos entendidos y resolver con cierta facilidad los conflictos del día a día, pero no te confíes. En un momento dado tu carisma podría no ser suficiente.");
    break;
  case 'escorpion':
    console.log("Debes pensar siempre en colaborar para la consecución de la paz. Ya conoces y comprendes los problemas ajenos y sabes que tienes que colaborar en la solución, pero te molesta que te utilicen. No te preocupes, piensa que quienes así proceden son los que más necesitan de tu caridad y ejemplo. ");
    break;
  case 'sagitario':
    console.log("Ten presente que tu entusiasmo impregna a quienes te rodean, de la seguridad que necesitan, para triunfar en lo que hacen diariamente para su propio sustento y bienestar. Actualmente crecen tus posibilidades para hacer fortuna si todavía no la tienes, o para incrementar tus reservas. Mantente alerta.");
    break;
  case 'capricornio':
    console.log("Pronto la suerte estará de tu lado y podrás tener una época de tranquilidad y prosperidad. Utiliza hoy tu fuerza de carácter para sacar adelante lo que necesites, sin dejarte vencer por los obstáculos. El amor pide más dulzura y comprensión de parte tuya, es importante tenerlo en cuenta para evitar que tu pareja se siga alejando. ");
    break;
  default:
    console.log("No hay información para este signo");
    break;
}
