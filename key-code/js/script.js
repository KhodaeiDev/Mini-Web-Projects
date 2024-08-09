// let title = document.querySelector("title");

//Codes
let keyCode = document.getElementById("keyCode");
let key = document.getElementById("key");
let keyLocation = document.getElementById("location");
let which = document.getElementById("which");
let code = document.getElementById("code");

document.body.addEventListener("keydown", function (event) {
  starter.style.display = "none";
  heading.style.display = "flex";
  ascii.style.display = "flex";
  infos.style.display = "flex";
});

document.body.addEventListener("keydown", function (event) {
  event.preventDefault();
  code.innerHTML = event.code;
  key.innerHTML = event.key;
  keyLocation.innerHTML = event.location;
  which.innerHTML = event.which;
  keyCode.innerHTML = event.keyCode;
  console.log(event);
});
