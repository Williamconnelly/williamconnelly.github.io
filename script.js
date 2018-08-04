
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
      image.src = "danmaku.gif";
    })
    image.addEventListener("mouseout", () => {
      image.src = "danmaku.png";
    });
  });
};

document.addEventListener("DOMContentLoaded", e => {
  M.AutoInit();
  addGifHover();
});
