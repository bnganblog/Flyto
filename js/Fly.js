function travelling() {
    var url = new Array();

  
    url[0] = "https://github.com/bnganblog/Flyto";
    url[1] = "https://www.g8d.xyz";
    url[2] = "https://blog.ajiang.club";

  
    if (document.referrer) {
      var origin = new URL(document.referrer).origin;
      if (url.includes(origin)) {
        url.splice(url.indexOf(origin), 1);
      }
    }
  
  
    var ints = Math.floor(Math.random() * url.length);
    window.location = url[ints];
  }
