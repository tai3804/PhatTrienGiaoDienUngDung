var heightMark = 1.69;
var weightMark = 78;

var heightJohn = 1.95;
var weightJohn = 92;

var bmiMark = weightMark / (heightMark * heightMark);
var bmiJohn = weightJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark.toFixed(1)}) is higher than John's BMI (${bmiJohn.toFixed(1)})`);
} else {
    console.log(`John's BMI (${bmiJohn.toFixed(1)}) is higher than Mark's BMI (${bmiMark.toFixed(1)})`);
}