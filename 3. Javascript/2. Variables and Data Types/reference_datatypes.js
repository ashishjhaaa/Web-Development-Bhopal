// Object
let obj = { name: "Alice", age: 21 };
console.log("Object:", obj);
console.log(typeof obj); // "object"

// Array
let arr = [1, 2, 3, 4];
console.log("Array:", arr);
console.log(typeof arr); // "object"

// Function
let func = function () {
  return "Hi from function";
};
console.log("Function call:", func());
console.log(typeof func); // "function"

// Reference behavior demonstration
let a = { value: 10 };
let b = a; // both point to same memory
b.value = 20;

console.log("Reference A:", a); // { value: 20 }
console.log("Reference B:", b); // { value: 20 }
