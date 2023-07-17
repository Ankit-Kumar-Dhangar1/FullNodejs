const fs= require('fs');

const biodata={
    name: "ankit",
    age:78,
    channel:"my utube",
};

const jsonData=JSON.stringify(biodata);
 fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("done")
 });

 fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data)
 });


 const orgData=JSON.parse(data);
 console.log(orgData);