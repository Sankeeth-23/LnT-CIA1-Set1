let students = [
    {name: "Rahul", marks: 85},
    {name: "Priya", marks: 35},
    {name: "Arun", marks: 78},
    {name: "Sneha", marks: 95}
];

for (let student of students) {
    if (student.marks < 40) {
        continue;
    }
    console.log(student.name, student.marks);
}