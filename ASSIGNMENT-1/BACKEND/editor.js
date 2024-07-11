const path = require("path");
const fs = require("fs");


const operation = process.argv[2];
const filw = process.argv[3];
const content = process.argv[4];


const redTheFile = (file) => {
    fs.readFile(file , "utf-8" , (err,data) => {
        if(err) {
            console.log(err);
        }
        else{
            console.log(err);
        }
    });
}

const deleteTheFile = (path) => {
    fs.unlink(path, (err) => {
        if(err) {
            console.log(err)
        }
    })
}

switch (operation) {
    // complete the fillowing function.
   
    case "read":
        if(file) {
            readTheFile(file)
        }
        break;

        case "delete":
        if(file){
            deleteTheFile(file)
        }
        break;

    default:
      console.log(`Invalid operation '${operation}'`);
  }