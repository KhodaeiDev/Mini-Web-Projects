let btn = document.getElementById("btn");
let modalParent = document.querySelector(".modal-parent");
let section = document.querySelector("section");

let x = document.querySelector(".X");

function openModal() {
  modalParent.style.display = "block";
  section.style.filter = "blur(10px)";
  btn.blur();
}

function closeModal(event) {
  modalParent.style.display = "none";
  section.style.filter = "blur(0)";
  if (event.keyCode == 17) {
    modalParent.style.display = "none";
    section.style.filter = "blur(0)";
  }
}

btn.addEventListener("click", openModal);
x.addEventListener("click", closeModal);
document.body.addEventListener("keyup", closeModal);
