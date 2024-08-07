let celsius = document.querySelector(".C");
let fahrenheit = document.querySelector(".F");

let c = "°C";
let f = "°F";

//* tempInput
let converter = document.querySelector("#converter");

//*Result
let result = document.querySelector(".result");

//* Btns
let convertButton = document.querySelector(".convertButton");
let resetButton = document.querySelector(".resetButton");
let changeButton = document.querySelector(".changeButton");

function convert() {
  let tempValue = converter.value;
  let tempResult = null;

  if (celsius.innerHTML === "°C") {
    tempResult = ((9 * tempValue) / 5 + 32).toFixed(2);
    result.innerHTML = `${tempValue} °C = ${tempResult} °F`;
  } else {
    tempResult = (((tempValue - 32) * 5) / 9).toFixed(2);
    result.innerHTML = `${tempValue} °F = ${tempResult} °C`;
  }
}

function reset() {
  result.innerHTML = "";
  converter.value = "";
}

function swap() {
  if (celsius.innerHTML === "°C") {
    celsius.innerHTML = f;
    fahrenheit.innerHTML = c;
    document.title = "°F to °C";
    converter.placeholder = f;
  } else {
    celsius.innerHTML = c;
    fahrenheit.innerHTML = f;
    document.title = "°C to °F";
    converter.placeholder = c;
  }
}

convertButton.addEventListener("click", convert);
resetButton.addEventListener("click", reset);
changeButton.addEventListener("click", swap);
