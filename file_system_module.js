const fs =require('fs')

console.log(fs.readFile('Tutorial.txt','utf8',(err,data)=>{
    console.log('Error is ',err);
    console.log(data);    
    
}));
