// Homework [EXTRA]

// ingredients
let spaghetti = 400;
let guanciale = 250;
let eggYolk = 6;
let pecorinoRomano = 50;
let blackPepper = 4;

// preparation

let firstMix = eggYolk + pecorinoRomano;
console.log(`first mix: ${firstMix}`);
let secondMix = firstMix + (1 / 4) * blackPepper;
console.log(`secondMix: ${secondMix}`);

let thirdMix = guanciale + spaghetti;
console.log(`thirdMix: ${thirdMix}`);

let forthMix = thirdMix + secondMix;
console.log(`forthMix: ${forthMix}`);

let past = "add spaghetti in  salty water then drain the water once cooked";
let creamySauce = "add 2 spoons of the served water inot guanciale";

let carbonara = forthMix + (3 / 4) * blackPepper;
// Spaghetti alla Carbonara read to be served
console.log(`carbonara: ${carbonara}`);
console.log("Enjoy your 'Spaghetti alla Carbonara' :)");
