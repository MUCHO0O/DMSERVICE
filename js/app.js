var url = window.location.href;
var swLocation = '/DMSERVICE/sw.js';



if ('serviceWorker' in navigator){

      if(url.includes('localhost')){
           swLocation = '/sw.js';
      }

     navigator.serviceWorker.register(swLocation);

}

