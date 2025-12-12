let fruits = ["Apple", "Banana", "Mango"];

let moreFruits = [...fruits, "Pineapple"];
console.log("Spread:", moreFruits);

function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log("Rest:", sum(1, 2, 3, 4));
