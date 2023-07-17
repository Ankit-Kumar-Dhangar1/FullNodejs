const EventEmitter=require('events');
const event=new EventEmitter();


// event.on('sayMyName',()=>{
//     console.log("your name is ankit");
    
// });

// event.on('sayMyName',()=>{
//     console.log("your name is abhishek");
    
// });

// event.on('sayMyName',()=>{
//     console.log("your name is sajid");
    
// });

// event.on('sayMyName',()=>{
//     console.log("your name is himanshu");
    
// });


// event.emit("sayMyName");





event.on("checkpage",(sc,msg)=>{
    console.log(`status code is ${sc} and page is ${msg}`)});


event.emit("checkpage",200,"ok");