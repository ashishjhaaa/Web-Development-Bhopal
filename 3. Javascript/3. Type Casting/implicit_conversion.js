// Implicit Conversion (Automatic)

// "+" operator converts everything to string
let result1 = "5" + 2;
let result2 = "5" + true;
let result3 = "5" + null;

// "-" "*" "/" convert to number
let result4 = "5" - 2;
let result5 = "10" * 2;
let result6 = "20" / "2";

console.log("5 + 2 =", result1);
console.log("5 + true =", result2);
console.log("5 + null =", result3);

console.log("5 - 2 =", result4);
console.log("10 * 2 =", result5);
console.log("20 / 2 =", result6);
