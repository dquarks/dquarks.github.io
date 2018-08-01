// var obj = document.getElementById("satelites");
 $('img.sat').click(function() {
   var id = $(this).attr('id');
   var index = parseInt(id.substring(3,id.length));
   console.log(id);

       if($(this).attr('obj-click-state') == 0) {
         console.log("Toggle off!");
         $(this).stop().animate({
                          "top":"100%"
                        }, 1000, "linear",
                        function() {
                          console.log("Resetting! " + index);
                          var x = index;
                          var window_h = $(window).height() - 100;
                          var sat_h = (window_h * .085) + window_h - ((window_h / (cache.length/2))*((x)+1));
                          $(this).css({ "left" : "-20%", "top": sat_h + "px", "width" : "65px", "height" : "60px", "z-index" : "0" });
                          cache[(index*2)+1] = 0;
                          $(this).attr('obj-click-state', 1)
                          return;
                        });

       }
       else {
         console.log("Toggle on!");
         $(this).stop().animate({
                          "left": Math.floor($(window).innerWidth()/2) - 500/2 + "px",
                          "top": Math.floor($(window).innerHeight()/2) - 490/2 + "px",
                          "z-index": "2",
                          "width": "500px",
                          "height": "490px",
                        }, 900, "linear", $(this).attr('obj-click-state', 0));
       }
 });
