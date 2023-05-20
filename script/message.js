$('.block').smoove({offset:'10%'});

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