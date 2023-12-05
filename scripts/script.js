var timeDisplay = document.getElementById("time");

function refreshTime() {
  const data = new Date();
  const h = data.getHours();
  const m = String(data.getMinutes()).padStart(2, "0");
  timeDisplay.innerHTML = h + ":" + m;
}
refreshTime();
setInterval(refreshTime, 1000);

var battery = document.getElementById("battery");
var b = 80;

const apps = document.getElementById("APPS");
const apps2 = document.getElementById("APPS2");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
function slide() {
  apps.classList.remove("slide3");
  apps2.classList.remove("slide4");
  apps.classList.add("slide");
  apps2.classList.add("slide2");

  btn1.classList.remove("btn-slide-actived");
  btn1.classList.add("btn-slide-disabled");
  btn2.classList.remove("btn-slide-disabled");
  btn2.classList.add("btn-slide-actived");
}

function slideBack() {
  apps.classList.remove("slide");
  apps2.classList.remove("slide2");
  apps.classList.add("slide3");
  apps2.classList.add("slide4");

  btn1.classList.remove("btn-slide-disabled");
  btn1.classList.add("btn-slide-actived");
  btn2.classList.remove("btn-slide-actived");
  btn2.classList.add("btn-slide-disabled");
}

const background = document.getElementById("background");
const appHide = document.getElementsByClassName("apps");
const appHide2 = document.getElementsByClassName("apps-bottom");
var up = background.getAttribute("up");
function facetime() {
  if (up == "false") {
    background.addEventListener("click", facetime);
    background.setAttribute("up", "true");
    background.style.backgroundImage =
      "url(./assets/iphone-cable-facetime.png) ";
    appHide[0].style.display = "none";
    appHide[1].style.display = "none";
    appHide2[0].style.display = "none";
  } else {
    background.setAttribute("up", "false");
    background.style.backgroundImage = "url(./assets/iphone-cable.png) ";
    appHide[0].style.display = "inline";
    appHide[1].style.display = "inline";
    appHide2[0].style.display = "inline";
  }
}
