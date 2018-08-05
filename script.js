
// Landing Page Icon Hover
var addIconHover = () => {
  const landingIcons = Array.from(document.getElementsByClassName("landing-icon"));
  landingIcons.forEach(icon => {
    icon.addEventListener("mouseover", () =>{
      icon.classList.add("hoveredIcon");
    })
    icon.addEventListener("mouseout", () =>{
      console.log("OUT");
      icon.classList.remove("hoveredIcon");
    });
  });
};

var addGifHover = () => {
  const previews = Array.from(document.getElementsByClassName("preview-image"));
  previews.forEach(image => {
    image.addEventListener("mouseover", () => {
      switch(true) {
        case(image.classList.contains("danmaku-img")):
          image.src = "danmaku.gif";
          break;
        case(image.classList.contains("movielist-img")):
          image.src = "movielist.gif"
        default:
          break;
      }
    })
    image.addEventListener("mouseout", () => {
      switch(true) {
        case(image.classList.contains("danmaku-img")):
          image.src = "danmaku.png";
          break;
        case(image.classList.contains("movielist-img")):
          image.src = "movielist.png"
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
