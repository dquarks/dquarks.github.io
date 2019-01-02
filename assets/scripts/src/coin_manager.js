var x     = 0;
var dur   = 8000;
var baggy = [ "coin0", 0,
              "coin1", 0,
              "coin2", 0,
              "coin3", 0,
              "coin4", 0 ];
var delay = 2500;

$(function() {
  function configure(id,n) {
    var rn = Math.floor(Math.random() * 11);

    //if(rn <= 4) $("#"+id).css({"background-image": "url('../graphics/alien.JPG')"});
    //console.log(rn);
    baggy[n+1] = 1;
    $("#" + id).animate({"top": "100%"}, {duration: dur, complete:function(){baggy[n+1] = 0; $("#" + id).css({"top": "0%", }); //$("#" + id).css({"background-image": "url('../graphics/coin_1.png')"});
                                          }, easing: "linear"});
  }

  function loop() {
    setTimeout(function() {
      if(baggy[x+1] == 0) {
        configure(baggy[x], x);
      } x += 2;

      if(x < baggy.length) {
        loop();
      } else {
        x = 0; loop();
      }
    }, delay);
  }

  loop();
});
