let students = [
    {name: "Rahul", marks: 85},
    {name: "Priya", marks: 90},
    {name: "Arun", marks: 78},
    {name: "Sneha", marks: 95}
];

students.pop();

students.sort((a, b) => a.marks - b.marks);

console.log(students);