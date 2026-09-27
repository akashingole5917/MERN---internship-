const expenses = [
 { category: "Food", amount: 300 },
 { category: "Transport", amount: 150 },
 { category: "Shopping", amount: 400 },
];

const total = expenses.reduce((sum, item) => sum + item.amount, 0);
console.log("Total Expense: ₹" + total);
