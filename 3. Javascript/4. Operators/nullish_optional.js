// Nullish Coalescing (??)

let userInput = null;
let defaultValue = userInput ?? "Default";
console.log("Value:", defaultValue);

let emptyString = "";
console.log("Empty string with ??:", emptyString ?? "Fallback");

let zeroValue = 0;
console.log("Zero with ??:", zeroValue ?? "Fallback");

// Optional Chaining (?.)

let person = {
  name: "Bob",
  address: { city: "Delhi" },
};

console.log("City:", person.address?.city);
console.log("Pin:", person.address?.pin);

let employee = null;
console.log("Employee name:", employee?.name);

// Optional chaining with function calls
let obj = {
  greet() {
    return "Hello";
  },
};

console.log("Function call:", obj.greet?.());
console.log("Missing function call:", obj.sayHi?.());
