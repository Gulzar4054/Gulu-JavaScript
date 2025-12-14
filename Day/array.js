const Array = ["apple", "banana", "cherry"];
Array.push("date");
console.log(Array);


const array20206 = [2026,2027,2028,2029];
array20206.unshift(2025);
array20206.pop();
console.log(array20206);

const arrayFruits = ["mango", "orange", "grape", "kiwi"];
const removedFruit = arrayFruits.splice(1, 2, "pear", "peach");
console.log(arrayFruits);