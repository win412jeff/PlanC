const imgList1 = [
  './images/message/mes_08.png',
  './images/message/Marquee/mes_14_72dpi_Marquee.png',
  './images/message/mes_05.png',
  './images/message/Marquee/mes_18_72dpi_Marquee.png',
  './images/message/mes_07.png',
  './images/message/Marquee/mes_41_72dpi_Marquee.png',
  './images/message/mes_50.png',
  './images/message/Marquee/mes_55_72dpi_Marquee.png',
  './images/message/mes_29.png',
  './images/message//Marquee/mes_40_72dpi_Marquee.png',
  './images/message/mes_24.png',

]

const imgList2 = [
  './images/message/mes_37.png',
  './images/message/Marquee/mes_33_72dpi_Marquee.png',
  './images/message/mes_47.png',
  './images/message/Marquee/mes_35_72dpi_Marquee.png',
  './images/message/mes_28.png',
  './images/message/Marquee/mes_53_72dpi_Marquee.png',
  './images/message/mes_13.png',
  './images/message/Marquee/mes_51_72dpi_Marquee.png',
  './images/message/mes_39.png',
  './images/message/Marquee/mes_34_72dpi_Marquee.png',
  './images/message/mes_46.png',
]

const getElementTemplate = (src) => /* html */ `<li><img src="${src}" alt=""></li>`
const getContainerTemplate = (srcList) => {
  const elementTemplates = srcList
    .map(getElementTemplate)
    .join('\n')
    .repeat(2)
  return /* html */ `
    <ul>
      ${elementTemplates}
    </ul>
  `
}

const fanmessageElement = document.querySelector('#fanmessage')
const marqueeUpElement = fanmessageElement.querySelector('.up')
const marqueeDownElement = fanmessageElement.querySelector('.down')

marqueeUpElement.innerHTML = getContainerTemplate(imgList1)
marqueeDownElement.innerHTML = getContainerTemplate(imgList2)

// 滑鼠 hover 時暫停動畫
const upUlElement = marqueeUpElement.querySelector('ul')
const downUlElement = marqueeDownElement.querySelector('ul')

upUlElement.addEventListener('mouseover', () => upUlElement.style.animationPlayState = 'paused')
upUlElement.addEventListener('mouseleave', () => upUlElement.style.animationPlayState = 'running')

downUlElement.addEventListener('mouseover', () => downUlElement.style.animationPlayState = 'paused')
downUlElement.addEventListener('mouseleave', () => downUlElement.style.animationPlayState = 'running')
