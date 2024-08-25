const rangeInput = document.querySelector("input");
const container = document.querySelector(".container");

function changeLight(event) {
  container.style.filter = "brightness(" + event.target.value + "%)";
}

rangeInput.addEventListener("change", changeLight);
