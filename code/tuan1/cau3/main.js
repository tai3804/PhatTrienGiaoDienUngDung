var scoreDolphin1 = 97;
var scoreDolphin2 = 112;
var scoreDolphin3 = 101;

var scoreKoalas1 = 109;
var scoreKoalas2 = 95;
var scoreKoalas3 = 106;

var averageDolphin = (scoreDolphin1 + scoreDolphin2 + scoreDolphin3) / 3;
var averageKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;

console.log("Average score of Dolphin team: " + averageDolphin.toFixed(2));
console.log("Average score of Koalas team: " + averageKoalas.toFixed(2));
if (averageDolphin < 100 && averageKoalas < 100) {
    console.log("No team win the trophy!");
} else {
    if (averageDolphin > averageKoalas) {
        console.log(`Dolphin team win the trophy with average score of ${averageDolphin.toFixed(2)}`);
    }
    else if (averageDolphin < averageKoalas) {
        console.log(`Koalas team win the trophy with average score of ${averageKoalas.toFixed(2)}`);
    }
    else {
        console.log("Draw!");
    }
}