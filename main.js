var canvas = document.getElementById("meuCanvas");
ctx = canvas.getContext("2d");
var altura = 90;
var largura = 100;
var RoverX = 100;
var RoverY = 100;
var fundo = "mars.jpg";
var rover = "rover.png";
function add(){
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = fundo;
    roverImgTag = new Image();
    roverImgTag.onload = uploadRover;
    roverImgTag.src = rover;
}
function uploadBackground(){
    ctx.drawImage(fundo, 0, 0, canvas.width, canvas.heigth);
}
function uploadRover(){
    ctx.drawImage(rover, RoverX, RoverY, altura, largura);
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e){
    keyPressed = e.keyCode; 
    console.log(keyPressed);
}