let fruits = ["Apple", "Banana", "Mango", "Orange"];

let sliced = fruits.slice(1, 3);
console.log("Sliced:", sliced);

fruits.splice(1, 1, "Kiwi");
console.log("After splice:", fruits);
