const menuImages = document.querySelectorAll(".menu-img");
const toBeRotated = document.querySelector(".slider");
let rotateAngle = 0;

menuImages.forEach((menuImage) => {
  menuImage.addEventListener("click", () => {
    rotateAngle -= 90;
    toBeRotated.style.transform = `rotate(${rotateAngle}deg)`;
  });
});
