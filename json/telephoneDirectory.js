// install npm 
var fs = require('fs');
var read = require('readline-sync');
// load data from phonDirectory
var phoneDir = JSON.parse(fs.readFileSync('./phoneDirectory.json'));
//Create function to showPhoneNumber
function showPhoneNumber() {
    // obj so we must use loop if we want to show member in obj
    for (var phoneNum of phoneDir){
    console.log(phoneNum.Name, phoneNum.phoneNumber);
    }
}
//Create function to add new phone number
function addNew(){
    //ask new infomation 
    var name = read.question('name: ');
    var phoneNum = read.question('phone number: ');
    //create object
    var newPhoneDir ={
        Name : name,
        phoneNumber : parseInt(phoneNum) // change from string to int
    }
    // push in telephone direction
    phoneDir.push(newPhoneDir);
}
// create function save and exit
function saveAndExit(){
    // convert from object to number then save to json file
    fs.writeFileSync('phoneDirectory.json',JSON.stringify(phoneDir));
}
// show menu
function showMenu(){
    console.log('1. Show all telephone directory');
    console.log('2. Add a new telephone number');
    console.log('3. Save and exit');
    //use npm read 
    var selection = read.question('>> ');
    //use switch case to do the selection
    switch(selection){
        case '1':
            showPhoneNumber();
            showMenu(); //use call back
            break;
        case '2':
            addNew();
            console.log(newPhoneDir);
            showMenu();  // same 
            break;
        case '3':
            saveAndExit();// because of exit so don't use call back
            break;
        default:
            console.log('Invalid Number');
            showMenu(); // same
            break;
    }

}
showMenu();