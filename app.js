// Author: Shri Suneel Kumar Reddy 

function hf() {
if(document.getElementById("height").value == "") {
window.speechSynthesis.speak(new SpeechSynthesisUtterance('Enter your height'));
}
}

function hw() {
if(document.getElementById("weight").value == "") {
window.speechSynthesis.speak(new SpeechSynthesisUtterance('Enter your weight'));
}
}

function bmi() {

var start = performance.now();
let ht = document.getElementById("height").value;
let h = parseFloat(ht);
let u = ht.replace(/[^a-zA-Z]/g, '');
let height = u == "f" || u == "F" ? 0.3048*h : h > 3.35 ? 0.3048*h : h; 
let score = document.getElementById("weight").value / (height* 2);
document.getElementById("score").innerHTML = score.toFixed(2);
document.getElementById("result").innerHTML = score >30 ?  "Obese" : score > 25 && score <= 30 ? "Overweight" : score >= 18.5 && score <= 25 ? "Normal (healthy weight)" : "Underweight";  
/*
if(score >30) {
    document.getElementById("result").innerHTML = "Obese";
}
else if(score > 25 && score <= 30) {
     document.getElementById("result").innerHTML = "Overweight";
    }
else if(score >= 18.5 && score <= 25) {
    document.getElementById("result").innerHTML = "Normal (healthy weight)";
    }
else {
    document.getElementById("result").innerHTML = "Underweight";
}
*/
var end = performance.now();
var wpn = end-start;
alert("Calculated in "+wpn.toFixed(2)+" ms 😎");
window.speechSynthesis.speak(new SpeechSynthesisUtterance('You are ' + document.getElementById("result").innerHTML));
}
