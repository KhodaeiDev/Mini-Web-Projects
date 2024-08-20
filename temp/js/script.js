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

//* convert button func
function convert() {
  let tempValue = converter.value;
  let tempResult = null;
  let value = converter.value;

  console.log(typeof Number(converter.value));

  if (!isNaN(value) && value !== "") {
    result.style.color = "#fff561";
    if (celsius.innerHTML === "°C") {
      tempResult = ((9 * tempValue) / 5 + 32).toFixed(2);
      result.innerHTML = `${tempValue} °C = ${tempResult} °F`;
    } else {
      tempResult = (((tempValue - 32) * 5) / 9).toFixed(2);
      result.innerHTML = `${tempValue} °F = ${tempResult} °C`;
    }
  } else {
    result.innerHTML = "Please Enter Number !!";
    result.style.color = "#a33737";
  }
}

//* reset button func
function reset() {
  result.innerHTML = "";
  converter.value = "";
}

//* change button func
function swap() {
  result.innerHTML = "";
  converter.value = "";

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
