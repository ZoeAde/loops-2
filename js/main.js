// add scripts
var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];

//Problem 1: joe, carl, rachel, derek

for (var i = 0; i < (students.length - 1) ; i++) {
  console.log(students[i]);
}

//Problem 2: joe, rachel, lily,
for (var i = 0; i < students.length; i+=2) {
  console.log(students[i]);
}

//Problem 3: lily, derek, rachel, carl, joe
for (var i = (students.length -1); i >= 0; i--) {
  console.log(students[i]);
}

//Problem 4: joe, carl, carl, rachel, rachel, derek, derek, lily
for (var i = 0; i < students.length; i++) {
  console.log(students[i]);
  if (i !== 0 && i !== (students.length - 1 )) {
    console.log(students[i]);
  }
}
