let inputHeight = document.querySelector("input.height");
let inputWeight = document.querySelector("input.weight");
let button = document.querySelector("button.submit");
let result = document.querySelector(".result");
let formElement = document.querySelector("form");

const height = inputHeight.value;
const weight = inputWeight.value;

button.addEventListener("click", () => {
  let heightInMeter = height / 100;
  let bmiResult = weight / (heightInMeter * heightInMeter);
  result.textContent = bmiResult.toFixed(2);

  switch (true) {
    case bmiResult < 18.5:
      result.classList.add("too-much");
      break;
    case bmiResult > 18.5 && bmiResult < 25:
      result.classList.add("between-green");
      break;
    case bmiResult > 25 && bmiResult < 30:
      result.classList.add("between-orange");
    case bmiResult >= 30:
      result.classList.add("too-much");
  }
});
