const students = {
    id: 5001,
    name: 'Francis Rudra D Cruze',
    age: 19,
    class: 'University',
    marks: {
        ISA: 50,
        OOP: 60,
        DBMS: 70,
        CN: 80
    }
}

const marks = students.marks['OOP'];
const marks2 = students.marks.OOP;
const subject = 'DBMS';

const marks3 = students.marks[subject];
const marks4 = students['marks']['CN'];
console.log(marks);
console.log(marks2);
console.log(marks3);
console.log(marks4);