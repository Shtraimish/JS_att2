const fs= require('fs');

//const data=fs.readFileSync('users.json','utf-8');

const data =fs.readFile('user.json','utf-8',(err,data)=>{
    if(err)return console.log(err);
    console.log(data);
});
