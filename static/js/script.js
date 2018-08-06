// Add img src swapping when hovered
var addGifHover = () => {
  const previews = Array.from(document.getElementsByClassName("preview-image"));
  previews.forEach(image => {
    image.addEventListener("mouseover", () => {
      switch(true) {
        case(image.classList.contains("danmaku-img")):
          image.src = "static/img/danmaku.gif";
          break;
        case(image.classList.contains("movielist-img")):
          image.src = "static/img/movielist.gif"
          break;
        case(image.classList.contains("punchcard-img")):
          image.src = "static/img/punchcard.gif"
          break;
        default:
          break;
      }
    })
    image.addEventListener("mouseout", () => {
      switch(true) {
        case(image.classList.contains("danmaku-img")):
          image.src = "static/img/danmaku.png";
          break;
        case(image.classList.contains("movielist-img")):
          image.src = "static/img/movielist.png"
          break;
        case(image.classList.contains("punchcard-img")):
          image.src = "static/img/punchcard.png"
          break;
        default:
          break;
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", e => {
  M.AutoInit();
  addGifHover();
});
