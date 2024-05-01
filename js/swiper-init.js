const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3, // Показывать сразу три слайда
  simulateTouch: true,
  grabCursor: true,
  // centeredSlides: true, // Центрирование слайдов
  spaceBetween: 20, // Расстояние между слайдами
  // slidesPerColumn: 2, // and this
  speed: 1500,

  autoplay: {
    delay: 2000, // Задержка между перелистываниями в миллисекундах
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
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
