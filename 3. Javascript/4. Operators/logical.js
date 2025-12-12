let x = true;
let y = false;

console.log("AND (&&):", x && y);
console.log("OR (||):", x || y);
console.log("NOT (!x):", !x);

// Logical Operators with non-boolean values
console.log("10 && 20 =", 10 && 20);
console.log("0 || 30 =", 0 || 30);
console.log("null || 'Hello' =", null || "Hello");
console.log("undefined && 'Hi' =", undefined && "Hi");