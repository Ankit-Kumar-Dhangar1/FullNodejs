// -----------------USING ASYNCHRONOUS FILE SYSTEM------------------

const fs=require("fs");

// fs.writeFile("bio.txt", "my name is ankit.\n",(err)=>{
//     console.log("completed");
//     console.log(err);
// });
 

// fs.appendFile("bio.txt", "my age is 20.",(err)=>{
//     console.log("Done");
// });



// fs.readFile("bio.txt", "UTF-8",(err,data)=>{
//     console.log(data);
// });


// fs.rename("bio.txt","akkk.txt",(err)=>{
//     console.log("poora hua");
// });



// fs.unlink("akkk.txt",(err)=>{   console.log("done ho gya"); });
fs.remdir("./thapa",(err)=>{ 
    console.log("khatam folder");
});
