const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 2, // Показывать сразу три слайда
  simulateTouch: true,
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20, // Расстояние между слайдами

  speed: 2500,

  autoplay: {
    delay: 2000, // Задержка между перелистываниями в миллисекундах
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  lazy: true, // Отложенная загрузка изображений слайдов
  // Дополнительные пользовательские обработчики событий

  keyboard: {
    enabled: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1.5,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
