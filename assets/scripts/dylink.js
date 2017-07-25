dirs = ["HOME", "TERMS", "MEDIA", "MUSIC", "SHOP"]; // List of each directory
page = document.getElementById('dynamic_link').innerHTML; // Get the inner HTML element of the current page
value = dirs.indexOf(page);
i = value;

$('a.fwd_btn').click(function() {
  if(i < dirs.length-1) {
    i ++;
  } else {
    i = 0;
  }
  $("a#dynamic_link").fadeOut(function() {
    $(this).text(dirs[i]).fadeIn();
    $(this).attr("href", "#" + i); // Change this to the corresponding URL for each directory
  });
});

$('a.bwd_btn').click(function() {
  // if i > 0 ? i--; : i = dirs.length-1;
  if(i > 0) {
    i --;
  } else {
    i = dirs.length-1;
  }
  $("a#dynamic_link").fadeOut(function() {
    $(this).text(dirs[i]).fadeIn();
    $(this).attr("href", "#" + i); // Change this to the corresponding URL for each directory
  });
});
/*
$('a.dyl').click(function() {
  $("a#dynamic_link").text('STORE');
});

*/
