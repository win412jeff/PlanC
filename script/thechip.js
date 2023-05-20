$('data-fancybox').fancybox({
    animationEffect: "slide",
    transitionEffect: "circular",
    loop: "ture",
    buttons:[
        "zoom",
        "slideShow",
        "thumbs",
        "close"
    ]
})

window.addEventListener('scroll', (e) => {
  let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  
  let $h1 = document.querySelector('h1')
  let $theChip = document.querySelector('#the-chip')
  let $A13 = document.querySelector('#A13')
  let $A13TextBg = document.querySelector('#the-chip .text-bg')
  
  $theChip.style.width = $theChip.style.height = document.documentElement.clientWidth * 20 * (scrolled * scrolled * scrolled) + 'px'
  
  if (scrolled <= 0.1) {
    $h1.style.opacity = (0.1 - scrolled) / 0.1
    $h1.style.marginTop = scrolled * 1000 * -1 + 'px'
  } else {
    $h1.style.opacity = 0
  }
  
  if (scrolled <= 0.2) {
    $A13.style.opacity = (scrolled - 0.1) / 0.1
  } else {
    $A13.style.opacity = 1
  }
  
  if (scrolled >= 0.23) {
    $A13TextBg.style.opacity = (0.23 - scrolled) / 0.5
    $theChip.classList.add('transparent')
  } else {
    $A13TextBg.style.opacity = 1
    $theChip.classList.remove('transparent')
  }
  
  if (scrolled >= 0.32) {
    $theChip.style.opacity = (0.32 - scrolled) / 0.05
  } else {
    $theChip.style.opacity = 1
  }
  console.log(scrolled)
  
  })
