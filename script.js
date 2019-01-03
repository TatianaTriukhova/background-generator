var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var ran  = document.getElementById("ran");

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, "
	+color1.value
	+", "
	+ color2.value + ")";
	displayCSS();
	
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);



window.onload = setGradient;

function displayCSS(){
	css.textContent = body.style.background + ";";
}

function getColor(){
	var signs = '0123456789ABCDEF';
	var color = '#';
	for(var i = 0;i<6;i++){
		color+=signs[Math.floor(Math.random()*16)];
	}
	return color;
}

function assignColors(){
	color1.value = getColor();
	color2.value = getColor();
	setGradient();
}

ran.addEventListener("click",assignColors);

