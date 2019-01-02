var x     = 0;
var t     = 0;
var dur   = 8000;
var baggy = [ "coin0", 0,
              "coin1", 0,
              "coin2", 0,
              "coin3", 0,
              "coin4", 0 ];
var delay = 2500;

$(function() {
  function configure(id,n) {
    //var rn = Math.floor(Math.random() * 20);


    if(t == 8) {
      t = 0;
      $("#"+id).css({"background-image": "url('http://sloppyny.com/assets/graphics/watermelon.png')"});
    }
    baggy[n+1] = 1;
    $("#" + id).animate({"top": "100%"}, {duration: dur, complete:function(){baggy[n+1] = 0; $("#" + id).css({"top": "0%", }); $("#" + id).css({"background-image": "url('http://sloppyny.com/assets/graphics/coin.png')"});
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
      } t ++;
      //console.log(t);
    }, delay);
  }

  loop();
});
