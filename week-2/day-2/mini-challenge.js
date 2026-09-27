const students = [
 { name: "Aman", marks: 85 },
 { name: "Sara", marks: 42 },
 { name: "Riya", marks: 68 },
 { name: "John", marks: 49 }
];

const passed = students.filter(s => s.marks >= 50);
const final = passed.map(s => {
  return { name: s.name, marks: s.marks + 5 };
});

let total = 0;
final.forEach(s => {
  console.log(s.name + ": " + s.marks);
  total = total + s.marks;
});

const avg = total / final.length;
console.log("Class Average: " + avg);
