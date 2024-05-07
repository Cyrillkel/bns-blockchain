// window.addEventListener("DOMContentLoaded", function () {
//   let video = document.querySelector(".video");

//   video.addEventListener("click", function () {
//     if (video.classList.contains("ready")) {
//       return;
//     }
//     video.classList.add("ready");

//     let src = video.dataset.src + "?autoplay=1";

//     video.insertAdjacentHTML(
//       "afterbegin",
//       `<iframe width="560" height="315" src="` +
//         src +
//         `" allowfullscreen></iframe>`
//     );
//   });
// });

// speed scroll links menu

const anchors = document.querySelectorAll('a[href*="#"]');

var links = document.querySelectorAll(".menu__list a");
console.log(links);

// Для каждой ссылки добавляем обработчик события клика
links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // Отменяем стандартное действие ссылки
    event.preventDefault();

    // Получаем значение атрибута href ссылки
    var targetId = link.getAttribute("href");

    // Находим элемент, к которому нужно прокрутить страницу
    var targetElement = document.querySelector(targetId);

    // Вычисляем позицию элемента на странице с учетом отступа
    var offset = targetElement.offsetTop - 140; // Вычитаем 140px

    // Прокручиваем страницу к элементу с учетом отступа
    window.scrollTo({
      top: offset,
      behavior: "smooth", // Добавляем плавность прокрутки
    });
  });
});

// mobile menu

const menu = document.querySelector(".menu__body");
const menuBtn = document.querySelector(".menu__icon");

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });
}

const menuLinks = document.querySelectorAll(".menu__body a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Закрываем меню
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("lock");
  });
});
