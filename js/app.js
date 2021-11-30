
var url = window.location.href;
var swlocation = '/DMSERVICE/sw.js'


if ('serviceWorker' in navigator){

     if (url.includes('localhost')){
          swlocation = '/sw.js';
     }

     navigator.serviceWorker.register(swlocation);

}

