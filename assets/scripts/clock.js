function timeRemaining(b) {
  var t = Date.parse(b) - Date.parse(new Date());
  var s = Math.floor((t / 1000) % 60);
  var m = Math.floor((t / 1000 / 60) % 60);
  var h = Math.floor((t / (1000 * 60 * 60)) % 24);
  var d = Math.floor(t / (1000 * 60 * 60 * 24));

  return {'total': t, 'days': d, 'hours': h, 'minutes': m,'seconds': s};
}

function startClock(id, b) {
  var object = document.getElementById(id);
  var dSpan = object.querySelector('.days');
  var hSpan = object.querySelector('.hours');
  var mSpan = object.querySelector('.minutes');
  var sSpan = object.querySelector('.seconds');

  function updateTime() {
    var t = timeRemaining(b);

    dSpan.innerHTML = t.days;
    hSpan.innerHTML = ('0' + t.hours).slice(-2);
    mSpan.innerHTML = ('0' + t.minutes).slice(-2);
    sSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if(t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateTime();
  var timeinterval = setInterval(updateTime, 1000);
}

var deadline = 'January 23 2017';
startClock('clockdiv', deadline);
