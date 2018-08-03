
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

document.addEventListener("DOMContentLoaded", e => {
  M.AutoInit();
});
