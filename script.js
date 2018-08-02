
// Landing Page Icon Hover
var addIconHover = () => {
  const landingIcons = Array.from(document.getElementsByClassName("landing-icon"));
  landingIcons.forEach(icon => {
    icon.addEventListener("mouseover", () =>{
      icon.style.color = "lightblue";
    })
    icon.addEventListener("mouseout", () =>{
      console.log("OUT");
    });
  });
};

document.addEventListener("DOMContentLoaded", e => {
  
});