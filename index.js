const fs=require('fs');
const http=require('http');

////////////////////////////////////////////////////////////////////////////////////////////////////////

//File

//Blocking, Synchronous way
// const txtIn =fs.readFileSync('txt/input.txt','utf-8');
// console.log(txtIn)
// const txtOut=`This is what we lnow about the avocado: ${txtIn}. \n Created on ${Date.now()} `;
// fs.writeFileSync('txt/output.txt',txtOut);
// console.log('File Written');


//Non-Blocking,asynchronus way
// fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`,'utf-8',(err,data3)=>{
//             console.log(data3);
//             fs.writeFile(`./txt/final.txt`,`${data2}\n${data3}`,`utf-8`,(err)=>{
//                 console.log(`Your file has been written😊😊`);
//             })
//         });
//     });
// });
// console.log('Will Read File!');


////////////////////////////////////////////////////////////////////////////////////////////////////////
//SERVER
const server=http.createServer((req,res)=>{
    
    res.end(`Hello from the server!`);
});

server.listen(8000,`127.0.0.1`,()=>{
    console.log(`Listening to requests on port 8000`);
});
