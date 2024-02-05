const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const body = document.querySelector("body");
const rgb = document.querySelector("#rgb-code"); //change with .innerText
const btnRandomColor = document.getElementById("random-color-btn");
//
red.addEventListener("input", changeBackground);
green.addEventListener("input", changeBackground);
blue.addEventListener("input", changeBackground);
red.addEventListener("input", changeCode);
green.addEventListener("input", changeCode);
blue.addEventListener("input", changeCode);

changeCode();
changeBackground();
// changing the innerHTML in rgb-code
function changeCode() {
  const redRange = red.value;
  const greenRange = green.value;
  const blueRange = blue.value;

  rgb.innerHTML =
    "rgb(" + redRange + ", " + greenRange + ", " + blueRange + ")";
}

// changing the background
function changeBackground() {
  const redRange = red.value;
  const greenRange = green.value;
  const blueRange = blue.value;
  document.body.style.setProperty(
    "background-color",
    "rgb(" + redRange + ", " + greenRange + ", " + blueRange + ")"
  );
}
// random color function
function randomColor() {
  const colorData = fetch("https://dummy-apis.netlify.app/api/color");
  colorData
    .then((response) => {
      console.log(colorData);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const redRange = red.value;
      const greenRange = green.value;
      const blueRange = blue.value;
      document.body.style.setProperty(
        "background-color",
        "rgb(" + data.rgb.r + ", " + data.rgb.g + ", " + data.rgb.b + ")"
      );
      rgb.innerHTML =
        "rgb(" + data.rgb.r + ", " + data.rgb.g + ", " + data.rgb.b + ")";
      red.value = data.rgb.r;
      green.value = data.rgb.g;
      blue.value = data.rgb.b;
    });
}
// event listener
btnRandomColor.addEventListener("click", randomColor);
// random color api
// https://dummy-apis.netlify.app/api/color
