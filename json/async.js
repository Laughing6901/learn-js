// use npm
// read file json
var fs = require('fs');
// read file in http
var axios = require('axios');
// create function to load file 
function loadFile(path) {
// use return new promise to take data and loadFile must be return Promise if want
// to use .then or something with data like return in another function
// this is formular to do return new Promise ((resolve,reject) => { do st here})
return new Promise((resolve,reject) => {
    fs.readFile('./data.json', { encoding: 'utf8'}, (err, data) =>{
        if (err){
          reject(err); // notify if error
        }
        else{
          resolve(data);   // data returned 
        }
      });

});
}
// create readFile from http by axios
function readFile(path){
return new Promise((resolve,reject) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(function(res) {
        resolve(res.data);
      });
    });
}
// use async to read file
async function run() {
//declare variable
  //use fs to load file from json file
  var job1 = await loadFile('./data.json');
  // use axios to load file from web
  var job2 = await readFile('https://jsonplaceholder.typicode.com/todos/1');
  // output
  console.log(job1, job2);
}
run();

