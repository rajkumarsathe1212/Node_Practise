
let events = require("events");
let em = new events.EventEmitter();

let fs = require("fs");

let http = require("http");

// fs.open("info.txt", "a", (err,fd)=>{
//     if(err){
//         console.log("Error" + err);
//         return;
//     }
//     fs.writeFile(fd," Welcome to NodeJS ",(err)=>{
//         if(err){
//             console.log("Error" + err);
//             return;
//         }
//         console.log("Mission Successfully completed");
//     })
// });

// let server = http.createServer((req,res)=>{
//     if(req.url == "/"){
//         res.end(fs.readFileSync("index.html"))
//     }
//     else if(req.url == "/info"){
//         res.end(fs.readFileSync("info.html"))
//     }
//     else{
//         res.end("Page not found");
//     }
//     // res.end("Here is your result");
// }).listen(8081);


// Event and Event Emitter

function callme(name){
    console.log("Welcome " + name);
}

em.on("joined", callme);

em.emit("joined", "Rajkumar");

setTimeout(() => {
    em.emit("joined", "Vivek");
}, 2000);

setInterval(() => {
    em.emit("joined", "Rushi");
}, 2000);
em.emit("joined", "Aniket");
em.emit("joined", "");
