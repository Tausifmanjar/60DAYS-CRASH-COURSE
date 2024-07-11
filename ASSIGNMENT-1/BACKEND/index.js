// index.js

//  import the crypto module
const crypto = require("crypto");


//  get a commands using process.argv
const args = process.argv.slice(2);
const operation = args[0];
const number = args.slice(1).map(Number);

// complete the  function
const randomNumber = (length) => {
    const number = crypto.randomInt(1, (err , length) => {
        if(err) {
            console.log(err);

        }else{
            let n = buff.toString("hex");
            console.log(parseInt(length));
        }
    });
};


switch (operation) {
    case "add":
        console.log(number.reduce((acc,curr) => acc + curr , 0));

        break;
        case "sub":
            console.log(number.reduce((acc,curr) => acc - curr));

            break;

            case "random":
                randomNumber(numbers[0])
  
    default:
      console.log("Invalid operation");
  }