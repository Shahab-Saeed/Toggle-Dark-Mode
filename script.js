let mode = document.getElementById("moonIcon");
let c = true;
mode.onclick = function () {
  if (c) {
    document.body.style.background = "black";
    mode.src = "dark theme icon/sun.png";
    c = false;
  } else {
    mode.src = "dark theme icon/moon.png";
    document.body.style.background = "#fff";

  }
};
