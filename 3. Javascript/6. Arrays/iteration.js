let fruits = ["Apple", "Banana", "Mango"];

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log("for:", fruits[i]);
}

// forEach
fruits.forEach(function (item, idx) {
  console.log("forEach:", idx, item);
});
