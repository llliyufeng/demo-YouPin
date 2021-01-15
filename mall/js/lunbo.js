window.onload = function () {
  var timer;
  var lunbo = document.getElementsByClassName("lunbo")[0];
  var lunbo_ul = document.getElementsByClassName("lunbo_img");
  lunbo.onmouseenter = function () {
    clearInterval(timer);
  };
  lunbo.onmouseleave = function () {
    autoPlay();
  };

  offset = 0;

  function autoPlay() {
    timer = setInterval(function () {
      offset += -900;
      if (offset <= -5400) {
        offset = 0;
      }
      $(".lunbo_img").css("marginLeft", offset);
    }, 3000);
  }
  autoPlay();
};
