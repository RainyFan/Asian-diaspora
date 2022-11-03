

const infoElement = document.querySelectorAll(".info");
const sceneElement = document.querySelectorAll(".scene");
console.log(infoElement);
infoElement.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    if (e.target.classList.contains("visible")) {
      e.target.classList.remove("visible");
      sceneElement[index].classList.add("visible");
    } else {
      e.target.classList.add("visible");
      sceneElement[index].classList.remove("visible");
    }
  });
});
