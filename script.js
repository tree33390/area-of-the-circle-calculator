console.log("a secret message that you're gonna tell");


document.querySelector("#calc-btn").addEventListener("click",function() {
    console.log("click regiwtered");

var radius = document.querySelector("#radius").value;
var radiusnumber = parseInt(radius);

var areaofsircil = radiusnumber * radiusnumber * Math.PI;

document.querySelector("#answer").textContent = areaofsircil;

});

document.querySelector("#calc-btn2").addEventListener("click", function() {

var sidelength1 = document.querySelector("#sidelength1").value; 
var sidelength1number = parseInt(sidelength1)

var sidelength2 = document.querySelector("#sidelength2").value; 
var sidelength2number = parseInt(sidelength2);

var areaofrectangle = sidelength1number * sidelength2number;

document.querySelector("#answer2").textContent = areaofrectangle;

});

document.querySelector("#calc-btn3").addEventListener("click", function() {

var distance = document.querySelector("#theDistance").value;
var distance2 = parseInt(distance);

var time = document.querySelector("#theTime").value;
var time2 = parseInt(time); 

var rate = distance2/time2; 

document.querySelector("#answer3").textContent = rate                       

});