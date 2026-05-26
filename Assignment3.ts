// 1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
// marks [75, 80, 82] Add 10 marks to each students using assignment operators and
// store it into another array, after adding 10 marks identify the average marks of all
// students

// Expected Output:
// Updated Marks:
// Suresh: 85
// Mahesh: 90
// Naresh: 92
// Average Marks: 89.0

let sName: string[] = [`Suresh`, `Mahesh`, `Naresh`];
let sMarks: number[] = [75, 80, 82]
sMarks = sMarks.map(mark => mark + 10)

console.log(`Updated Marks:`);

for (let i = 0; i < 3; i++)

    console.log(`${sName[i]} : ${sMarks[i]}`);

let avg = sMarks.reduce((sum, mark) => sum + mark, 0) / sMarks.length;

console.log(`Average Marks: ${avg.toFixed(1)}`);







