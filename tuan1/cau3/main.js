var scoreDolphin = [96, 108, 89];
var scoreKoala = [88, 91, 110];

var averageDolphin = 

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