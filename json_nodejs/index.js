const biodata={
    name: "ankit",
    age:78,
    channel:"my utube",
};

const jsonData=JSON.stringify(biodata);
console.log(jsonData);

const objData=JSON.parse(jsonData);
console.log(objData);
