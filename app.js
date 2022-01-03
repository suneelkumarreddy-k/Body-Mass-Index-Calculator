function bmi() {
var start = performance.now();
document.getElementById("score").innerHTML = document.getElementById("weight").value / (document.getElementById("height").value * 2);
var end = performance.now();
var wpn = end-start;
alert("Calculated in "+wpn+" ms 😎");
}
