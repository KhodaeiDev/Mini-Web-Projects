//* Input Elem
let weightInput = document.getElementById("weight");
let heightInput = document.getElementById("height");

//* Display values
let weightVal = document.getElementById("weight-val");
let heightVal = document.getElementById("height-val");

//* Result
let result = document.getElementById("result");
let category = document.getElementById("category");

//* Calculat Func
function calculate() {
  let weightValue = weightInput.value;
  let heightValue = heightInput.value;

  weightVal.innerHTML = weightValue + " kg";
  heightVal.innerHTML = heightValue + " cm";

  let heightInMeters = heightValue / 100;
  let bmi = weightValue / Math.pow(heightInMeters, 2);

  if (bmi <= 18.5) {
    result.style.color = "#34b3fb";
    category.innerHTML = "Under weight";
  } else if (bmi <= 22.9 && bmi > 18.5) {
    result.style.color = "#26bb1c";
    category.innerHTML = "Normal weight";
  } else if (bmi <= 24.9 && bmi > 22.9) {
    result.style.color = "#e5e769";
    category.innerHTML = "Risk to over weight";
  } else if (bmi <= 29.9 && bmi > 24.9) {
    result.style.color = "#FFA500";
    category.innerHTML = "Over weight";
  } else if (bmi >= 30) {
    result.style.color = "#D70000";
    category.innerHTML = "Obesity";
  }

  result.innerHTML = bmi.toFixed(1);
}
