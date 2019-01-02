dirs = [
"Everything will be okay.",
"Life is boring without a few challenges.",
"Regardless of how many doors are in your way, keep moving forward.",
"Embrace every piece of hate you receive, use each person who has ever talked down to you as a medal and count them as a blessing that you received what you did from them before you are 'up,' prove every person who told you otherwise wrong, don't ever let hate from others interfere with your success. It's my advantage. Hate me."];


// List of each directory
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
