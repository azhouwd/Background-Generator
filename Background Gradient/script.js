var body = document.querySelector("body")
var color1 = document.querySelector("#colorPicker1");
var color2 = document.querySelector("#colorPicker2");
var colorValue = document.querySelector("#colorValue");
var colorbtn = document.querySelector('#colorbtn');

color1.addEventListener("input",function(){
	changeBackgroundColor();
})

color2.addEventListener("input",function(){
	changeBackgroundColor();
})

function changeBackgroundColor(){
	body.style.background = "linear-gradient(to left,"+color1.value+","+color2.value+")";
	colorValue.textContent = body.style.background
}

colorbtn.addEventListener("click",function(){
	color1.value = randomColor();
	color2.value = randomColor();
	changeBackgroundColor();
})

function randomColor(){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for(var i=0;i<6;i++){
		color = color + letters[Math.floor(Math.random()*16)];
	}
	return color;
}
