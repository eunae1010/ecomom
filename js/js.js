var swiper = new Swiper(".swiper", {
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