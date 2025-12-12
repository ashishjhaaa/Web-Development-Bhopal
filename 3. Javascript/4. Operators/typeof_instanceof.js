// Type Operators

// typeof
console.log("typeof 'Hello':", typeof "Hello");
console.log("typeof 123:", typeof 123);
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null);
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []);
console.log("typeof function(){}:", typeof function () {});

// instanceof
function Person(name) {
  this.name = name;
}

let p = new Person("Ashish");

console.log("p instanceof Person:", p instanceof Person);
console.log("[] instanceof Array:", [] instanceof Array);
console.log("{} instanceof Object:", {} instanceof Object);
