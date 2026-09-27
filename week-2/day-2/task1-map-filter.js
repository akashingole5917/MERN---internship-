const prices = [120, 250, 300, 450, 600];

const filtered = prices.filter(price => price > 250);
const discounted = filtered.map(price => price - price * 0.1);

console.log("Original:", prices);
console.log("Filtered:", filtered);
console.log("Discounted:", discounted);
