const fruits = ["apple", "banana"];
const moreFruits = ["cherry", "mango"];
const allFruits = [...fruits, ...moreFruits];
console.log(allFruits);

const printFruits = (...fruitsList) => {
  console.log(fruitsList);
};
printFruits(...allFruits);
