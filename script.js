procent.innerHTML = sliderRange.value + " %";

function colorChange() {
  let sliderRange = document.getElementById("sliderRange");
  let procent = document.getElementById("procent");

  procent.innerHTML = sliderRange.value + " %";

  if (sliderRange.value >= 51) {
    let box = document.getElementById("box");
    box.style.backgroundColor = "red";
  } else {
    box.style.backgroundColor = "blue";
  }
}
