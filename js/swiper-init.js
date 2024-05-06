const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3, // Показывать сразу три слайда
  simulateTouch: true,
  grabCursor: true,
  
  spaceBetween: 20, // Расстояние между слайдами
 
  speed: 1500,

  autoplay: {
    delay: 2000, // Задержка между перелистываниями в миллисекундах
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  keyboard: {
    enabled: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    1024: {},
  },
});

