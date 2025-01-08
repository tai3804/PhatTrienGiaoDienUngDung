var heightMark = 1.69;
var weightMark = 78;

var heightJohn = 1.95;
var weightJohn = 92;

var bmiMark = weightMark / (heightMark * heightMark);
var bmiJohn = weightJohn / (heightJohn * heightJohn);

var markHigherBMI = bmiMark > bmiJohn;
console.log("Mark's height: " + heightMark);
console.log("Mark's weight: " + weightMark);
console.log("Mark's BMI: " + bmiMark);
console.log("===================================\n");
console.log("John's height: " + heightJohn);
console.log("John's weight: " + weightJohn);
console.log("John's BMI: " + bmiJohn);

console.log("Is Mark's BMI higher than John's? " + markHigherBMI);