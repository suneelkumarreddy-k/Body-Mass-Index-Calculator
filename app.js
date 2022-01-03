function bmi() {
var start = performance.now();
let score = document.getElementById("weight").value / (document.getElementById("height").value * 2);
document.getElementById("score").innerHTML = score;
switch (score) {
  case score < 18.5:
    document.getElementById("result").innerHTML = "Underweight";
    break;
  case score >= 18.5 && score <= 25: 
    document.getElementById("result").innerHTML = "Normal (healthy weight)";
    break;
  case score >= 25 && score <= 30:
     document.getElementById("result").innerHTML = "Overweight";
    break;
  case score >30:
    document.getElementById("result").innerHTML = "Obese";
}
var end = performance.now();
var wpn = end-start;
alert("Calculated in "+wpn+" ms 😎");
}
