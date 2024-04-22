window.addEventListener("DOMContentLoaded", function () {
  let video = document.querySelector(".video");

  video.addEventListener("click", function () {
    if (video.classList.contains("ready")) {
      return;
    }
    video.classList.add("ready");

    let src = video.dataset.src;

    video.insertAdjacentHTML(
      "afterbegin",
      `<iframe width="560" height="315" src="` +
        src +
        `" allowfullscreen></iframe>`
    );
  });
});
