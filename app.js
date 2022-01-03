// Author: Shri Suneel Kumar Reddy 

function bmi() {
var start = performance.now();
let score = document.getElementById("weight").value / (document.getElementById("height").value * 2);
document.getElementById("score").innerHTML = score;
switch (score) {
case score >30:
    document.getElementById("result").innerHTML = "Obese";
break; 
case score >= 25 && score <= 30:
     document.getElementById("result").innerHTML = "Overweight";
    break;
case score >= 18.5 && score <= 25: 
    document.getElementById("result").innerHTML = "Normal (healthy weight)";
    break;
default :
    document.getElementById("result").innerHTML = "Underweight";
}
var end = performance.now();
var wpn = end-start;
alert("Calculated in "+wpn+" ms 😎");
}
