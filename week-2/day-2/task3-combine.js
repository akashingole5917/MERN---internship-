const scores = [45, 80, 90, 35, 60, 75];

const passing = scores.filter(s => s >= 50);
const bonus = passing.map(s => s + 10);
const total = bonus.reduce((a, b) => a + b, 0);

console.log(passing);
console.log(bonus);
console.log(total);
