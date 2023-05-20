



 
$(function () {
  //Overlay
TweenMax.to('.overlay', 2, {
  delay:1,
  top:"-100%",
  ease:Expo.easeInOut
})
//背景
TweenMax.from('.backgr', 1, {
  delay:3,
  opacity:0,
  x:-100,
  ease:Expo.easeInOut
})
//熙歌封面
TweenMax.from('.cyg', 1, {
  delay:3.5,
  opacity:0,
  x:-50,
  ease:Expo.easeInOut
})

//王熙歌字
TweenMax.from('.wang', 1, {
  delay:4,
  opacity:0,
  x:100,
  ease:Expo.easeInOut
}, 0.08)
//首頁選單
TweenMax.from('#home', 1, {
  delay:4.5,
  opacity:0,
  x:-100,
  ease:Expo.easeInOut
})

  // 滑動至置頂
  $('#gotop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 1000);
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {

        $('#gotop').stop().fadeTo('fast', 1);

    } else {

        $('#gotop').stop().fadeOut('fast');

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

});

window.addEventListener('scroll', (e) => {
let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)-0.5

let $h1 = document.querySelector('h1')
let $theChip = document.querySelector('#the-chip')
let $A13 = document.querySelector('#A13')
let $A13TextBg = document.querySelector('#the-chip .text-bg')

$theChip.style.width = $theChip.style.height = document.documentElement.clientWidth * 300 * ((scrolled+0.1) * (scrolled+0.1) * (scrolled+0.1)) + 'px'

if (scrolled <= 0.0063) {
  $h1.style.opacity = (0.0063 - scrolled) / 0.0063
  $h1.style.marginTop = scrolled * 1000 * -1 + 'px'
} else {
  $h1.style.opacity = 0
}

if (scrolled <= 0.0063) {
  $A13.style.opacity = (scrolled - 0.0063) / 0.0063
} else {
  $A13.style.opacity = 1
}
if (scrolled >= 0.013) {
  $A13TextBg.style.opacity = (0.142 - scrolled) / 0.5
  $theChip.classList.add('transparent')
} else {
  $A13TextBg.style.opacity = 1
  $theChip.classList.remove('transparent')
}

if (scrolled >= 0.135) {
  $theChip.style.opacity = (0.14 - scrolled) / 0.05
} else {
  $theChip.style.opacity = 1
}

console.log(scrolled)
console.log(document.documentElement.clientWidth)
console.log(document.documentElement.scrollHeight)
})

// 取得要觀察的元素
const targetElement = document.querySelector('#scrollfather')

// 建立 IntersectionObserver 實例，設定觸發事件的 callback function
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 元素進入 viewport
      observer.unobserve(targetElement)
      handleAnimation()
    }
  })
})

// 開始觀察目標元素
observer.observe(targetElement)

function handleAnimation() {
  let tl = gsap.timeline({
      scrollTrigger:{
          trigger: '.bg',
          pin: true,
          start: 'top top',
          end: '+=' + window.innerHeight * 2,
          scrub: 0.3,
      }
  })

  tl.to('.bg', {
      rotation: -360,
      xPercent: -90,
      yPercent: 20,
      backgroundColor: 'transparent',
      backgroundSize: '100%',
      clipPath: 'circle(50% at 50% 50%)',
  })

  tl.to('.bg', {
      yPercent: 8,
  })

  tl.to('.bg', {
      yPercent: 1,
      xPercent: 2,
      
  })
}
