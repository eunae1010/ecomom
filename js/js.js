// 헤더
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) {
    header.classList.add('on')
  };
  if(window.scrollY <= 300) {
    header.classList.remove('on');
  };
});

// 헤더 메뉴
const elBtn = document.querySelector('.header_left button');
const elMenu = document.querySelector('.lnb');
const elCov = document.querySelector('.cover');
const elClose =document.querySelector('.lnb_close')
elBtn.onclick = function() {
  elMenu.classList.add('active');
  elCov.classList.add('active');
}
elClose.onclick = function() {
  elMenu.classList.remove('active');
  elCov.classList.remove('active');
}

// 서브메뉴
const lnbSubBtn = document.querySelectorAll('.list_open');
const lnbToggle = document.querySelectorAll('.list_open span');
const list_sub = document.querySelectorAll('.list_sub');
lnbSubBtn.forEach((item, idx) => {
  item.onclick = function() {
    lnbToggle[idx].classList.toggle('open');

    if(lnbToggle[idx].classList.contains('open')) {
      list_sub[idx].style.height = 'auto';
    } else {
      list_sub[idx].style.height = '0';
    };
  };
});

// 메인 이미지 슬라이드
var swiper = new Swiper(".slider_main", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// eco_act
var swiper2 = new Swiper(".eco_act", {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});