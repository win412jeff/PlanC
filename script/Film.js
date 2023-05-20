const options = {
    Thumbs: {
      type: "modern",
    },
  };

  var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
    });

    // 歌歌歌歌歌
let count = 0;
$("body").on("click", function (event) {
  var elements = new Array("歌");
  var target = $("<span/>").text(elements[count]);
  if (count === 20) {
    $("row:hidden").show("normal");
  }
  var x = event.pageX,
    y = event.pageY;
  target.css({
    "z-index": 999,
    "top": y - 42,
    "left": x + (Math.floor(Math.random() * 60 - 30)),
    "position": "absolute",
    "font-weight": "bold",
    "color": "red",
    "font-size": "22pt"
  });
  $("body").append(target);
  target.animate({
    "top": y - 380,
    "opacity": 0
  },
    1500,
    function () {
      target.remove();
    });
}); 