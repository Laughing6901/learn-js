//add module readFileSync;
var fss = require('fs');   
 // add module readLineSync;
var readLineSync = require('readline-sync');  
// add module write file; 
var writeFile = require('write-json-file'); 
//take data from data.json
var studentString = (fss.readFileSync(__dirname + '/data.json', 'utf8')); 
//tranfer studentString(String) to student(object)
var student = JSON.parse(studentString);
//create value to stop
var valuee = 0;
//create object newStudent
var newStudent = {
    Name : '',
    Age : '',
    Class :  0
}
    do {
    //show menu
    console.log('1. Show all student');
    console.log('2. Create new student');
    console.log('3. Save and exit');
    //input selection
    var selection = readLineSync.question('Please choose the number: '); // input number
    //do select 1.
    if (selection == "1"){
        console.log(student);   //show student
    }
    // do select 2   
    else if(selection == "2") {
        //input new student name
        newStudent.Name = readLineSync.question("your name: ");
        //input new student age
        newStudent.Age = readLineSync.question("your age: ");
        //input new student class
        newStudent.Class = (readLineSync.question("your class: "));

         console.log(newStudent);
         student.push(newStudent);
         console.log(student);
    }
    else{
        
        console.log(student);
        (async () => {
            await writeFile('data.json', student);
        })();
        valuee = 3;
    }}
    while (valuee < 3);