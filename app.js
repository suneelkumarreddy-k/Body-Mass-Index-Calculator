// Author: Shri Suneel Kumar Reddy 

function bmi() {
var start = performance.now();
let score = document.getElementById("weight").value / (document.getElementById("height").value * 2);
document.getElementById("score").innerHTML = score.toFixed(2);

if(score >30) {
    document.getElementById("result").innerHTML = "Obese";
}
else if(score >= 25 && score <= 30) {
     document.getElementById("result").innerHTML = "Overweight";
    }
else if(score >= 18.5 && score <= 25) {
    document.getElementById("result").innerHTML = "Normal (healthy weight)";
    }
else {
    document.getElementById("result").innerHTML = "Underweight";
}
var end = performance.now();
var wpn = end-start;
alert("Calculated in "+wpn+" ms 😎");
}
