// Var
var oldVar = "I am var";
oldVar = "Updated var";
var oldVar = "Redeclared var";
console.log("var:", oldVar);

// Let
let modernLet = "I am let";
modernLet = "Updated let";
// let modernLet = "Redeclare?"; // Error
console.log("let:", modernLet);

// Const
const constantValue = "I am const";
// constantValue = "Change?"; // Error
console.log("const:", constantValue);

// Const with object (allowed mutation)
const user = { name: "Ashish" };
user.name = "Updated Name";
console.log("const object mutation:", user);
