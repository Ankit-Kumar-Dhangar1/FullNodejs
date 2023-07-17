const fs = require("fs");

// fs.writeFile('read.txt', "today is so awesome.\n",


//     (err) => {
//         console.log("file is created");
//         console.log(err);
//     });




    // // appending into a file


    // fs.appendFile('read.txt', 'today is a good day',(err) => {
    //     console.log("task completed");
    // });



// reading data and console it
fs.readFile('read.txt',"UTF-8",(err, data) => {
    console.log(data);
});

