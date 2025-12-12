let str = "Hello";
let num = 42;
let bool = true;
let nothing = null;
let notDefined;
let bigIntNum = 999999999999999999999999n;

console.log("String:", str);
console.log("Number:", num);
console.log("Boolean:", bool);
console.log("Null:", nothing);
console.log("Undefined:", notDefined);
console.log("BigInt:", bigIntNum);

console.log(typeof str); // "string"
console.log(typeof num); // "number"
console.log(typeof bool); // "boolean"
console.log(typeof nothing); // "object" (JS special case)
console.log(typeof notDefined); // "undefined"
console.log(typeof bigIntNum); // "bigint"
