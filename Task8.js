let students = [
    {name: "Rahul", marks: 85},
    {name: "Priya", marks: 90},
    {name: "Arun", marks: 78}
];

students.push({name: "Sneha", marks: 95});

let highest = students[0];

for (let student of students) {
    if (student.marks > highest.marks) {
        highest = student;
    }
}

console.log(highest);