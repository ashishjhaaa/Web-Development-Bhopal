// Explicit Conversion

let strNum = "123";
let numVal = Number(strNum);
let boolVal = Boolean(numVal);
let strAgain = String(numVal);

console.log("Number('123') =", numVal);
console.log("Boolean(numVal) =", boolVal);
console.log("String(numVal) =", strAgain);

// Extra important cases
console.log("Number('') =", Number(""));
console.log("Number('hello') =", Number("hello"));
console.log("Boolean(0) =", Boolean(0));
console.log("Boolean('') =", Boolean(""));
console.log("Boolean('text') =", Boolean("text"));
console.log("String(true) =", String(true));
