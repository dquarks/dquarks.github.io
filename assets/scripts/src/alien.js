
var cache = [
  "sat0","0",
  "sat1","0",
  "sat2","0",
  "sat3","0",
  "sat4","0",
  "sat5","0",
  "sat6","0",
  "sat7","0",
  "sat8","0",
  "sat9","0",
  "sat10","0"/*,
  "sat11","0",
  "sat12","0",
  "sat13","0",
  "sat14","0",
  "sat15","0",
  "sat16","0",
  "sat17","0",
  "sat18","0",
  "sat19","0",
  "sat20","0"*/
];


  $(function() {
    function setObjParams(id, n) {
      console.log("Setting " + id);
      var duration = 100000; //Math.floor((Math.random() * 30000) + 10000);
      cache[n+1] = "1";
      $("#" + id).animate({ "left": $(window).width() }, duration, "linear",
        function() {
          //console.log("(" + id + ") Put me back!")
          //var ang = 0; /*Math.floor(Math.random()*20) + 9;*/
          // ang *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // Thanks SS!

          var window_h = $(window).height() - 100;
          var sat_h = Math.floor(Math.random() * window_h);
          $("#" + id).css({
            "left": "-20%",
            "top": sat_h + "px"
            //"-ms-transform": "rotate(" + ang +"deg)",       /* IE 9 */
            //"-webkit-transform": "rotate(" + ang + "deg)", /* Chrome, Safari, Opera */
            //"transform": "rotate(" + ang + "deg)"
          },

          duration, "linear", cache[n+1] = "0");
      });
    }

    var i = 0;
    function forLoop() {
      setTimeout(function() {
        if(cache[i+1] == "0") {
          console.log(cache);
          setObjParams(cache[i], i);
        }
        i += 2;
        if(i < (cache.length)) {
          forLoop();
        } else {
          console.log("Done. Resetting!");
          i = 0;
          forLoop();
        }
      }, Math.floor((Math.random() * 3000) + 1000));
    }

    var x = 0;
    var window_h = $(window).height() - 100;
    function configSatelites() {
      var ang = 0/*Math.floor(Math.random()*20) + 9*/;
      // ang *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
      var sat_h = (window_h * .085) + window_h - ((window_h / (cache.length/2))*((x/2)+1));
      $("#" + cache[x]).css({ "left" : "-20%",
                              "top": sat_h + "px",
                              "-ms-transform": "rotate(" + ang +"deg)",       /* IE 9 */
                              "-webkit-transform": "rotate(" + ang + "deg)", /* Chrome, Safari, Opera */
                              "transform": "rotate(" + ang + "deg)" });
      // console.log(x + ", " + parseInt(cache[x].substring(3,4)));
      // console.log(cache.length);
      x += 2;
      if(x < (cache.length)) {
        configSatelites();
        //console.log("Configuration done!");
      }
      return;
    }
    configSatelites();
    forLoop();
  });
