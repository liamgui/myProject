
//canvas for background animation

var background = document.getElementById("backgroundCanvas");
var backgroundContext = background.getContext("2d");

background.width = window.innerWidth;
background.height = window.innerHeight;
background.style.position = "absolute";
background.style.zIndex= "-1000";
background.style.top = "0";
background.style.left = "0";


function drawBackground() {

}






//cross-browser compatible 

if (window.addEventListener) {
    window.addEventListener("load", drawBackground, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", drawBackground);
}
