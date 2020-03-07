var fs = require('fs');
var axios = require('axios');

function loadFile(path) {
return new Promise((resolve,reject) => {
    fs.readFile('./data.json', { encoding: 'utf8'}, (err, data) =>{
        if (err){
          reject(err);
        }
        else{
          resolve(data);
        }
      });

});
}
function readFile(path){
return new Promise((resolve,reject) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(function(res) {
        resolve(res.data);
      });
    });
}
async function run() {
  var job1 = await loadFile('./data.json');
  var job2 = await readFile('https://jsonplaceholder.typicode.com/todos/1');
  console.log(job1, job2);
}
run();

/**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */