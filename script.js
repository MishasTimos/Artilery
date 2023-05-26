let inpute = document.getElementById("inpDistance");
let divangle = document.getElementById("angle");
let l; // = 10000;  
let g = 10;
let v0; // = 500; // 
let maxDistance;
document.addEventListener("DOMContentLoaded", () => {
    const ert = document.querySelector("#ide1");
    if (ert) {
      ert.addEventListener("click", () => {
        v0 = 900;
        maxDistance = 20000;
        console.log(l);
      });
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const ert = document.querySelector("#ide2");
    if (ert) {
      ert.addEventListener("click", () => {
        v0 = 745
        maxDistance = 17000
      });
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const ert = document.querySelector("#ide3");
    if (ert) {
      ert.addEventListener("click", () => {
        v0 = 690;
        maxDistance = 24000
      });
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const ert = document.querySelector("#ide4");
    if (ert) {
      ert.addEventListener("click", () => {
        v0 = 820
        maxDistance = 25000
      });
    }
  });
function retro(div)    {
    document.querySelectorAll('.b1').forEach(el => {
        el.style.backgroundColor = "lightGray"
    });
    div.style.backgroundColor = "lightGreen"
}
function thin() {
  console.log(l);
  console.log(v0);
  let inpute = document.getElementById("inpDistance").value
  if (inpute > maxDistance) {
    alert("Це більше максимума.");
  } else if (inpute < 0) {
    alert("Введіть реальне значення.");
  } else {
    //l = inpute;
    l = parseFloat(inpute)
    let sin2a = g * l / (v0 ** 2);
    let a = Math.asin(sin2a) / 2;
    a = a * 180 / Math.PI;
    a = Math.round(a * 100) / 10;
    console.log(a + "°");
    alert(a + "°");
  }
  
}