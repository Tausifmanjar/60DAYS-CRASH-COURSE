//FACTORY FUNCTION ASSIGNMENTS 

//PROBLEM 1

function iPhone1(ASIN, color, display, camera) {
  let obj = {};

  obj.ASIN = ASIN;
  obj.color = color;
  obj.display = display;
  obj.camera = camera;

  obj.dial = function () {
    console.log("tring.... tring....");

  }
  obj.sendMessage = function () {
    console.log("Sending message");

  }
  obj.cameraClick = function () {
    console.log("Camera clicked");

  }
  return obj;
}


// let i1 = iPhone1(
//     1,
//     "B09X67JBQV",
//     7.8,
//     "IOS",
//     "128mb",
//     "Gray",
//     "90mm",
//     "2.0 MP"
//   );
//   ---- properties
//   console.log(i1.ASIN); // 1
//   console.log(i1.color); // "B09X67JBQV"
//   console.log(i1.display); // 7.8
//   console.log(i1.camera); // "IOS"

// //   ---- methods
//   console.log(i1.dial()); // "tring.. tring..."
//   console.log(i1.sendMessage()); // "Sending message..."
//   console.log(i1.cameraClick()); // "Camera clicked"



//PROBLEM 2

// function iPhone2(ASIN, color, display, camera,bluetooth){
//     let obj = {};
//     obj.ASIN = ASIN;
//     obj.color = color;
//     obj.display = display;
//     obj.camera = camera;
//     obj.bluetooth = bluetooth;

//     obj.dial = function(){
//       console.log("tring.... tring....");

//     }
//     obj.sendMessage  = function(){
//       console.log("Sending message");

//     }
//     obj.cameraClick = function(){
//       console.log("Camera clicked");

//     }
//     obj.connectBluetooth = function(){
//         console.log("Bluetooth connected");

//     }
//     return obj;

// }


// function iPhone2(ASIN, color, display, camera, bluetooth, bodyColor, width, cameraSpec, osVersion) {
//     return {
//       ASIN,
//       color,
//       display,
//       camera,
//       bluetooth,
//       bodyColor,
//       width,
//       cameraSpec,
//       osVersion,

//       // Methods
//       dial() {
//         return "tring.. tring...";
//       },

//       sendMessage() {
//         return "Sending message...";
//       },

//       cameraClick() {
//         return "Camera clicked";
//       },

//       connectBluetooth() {
//         return "Bluetooth connected successfully...";
//       }
//     };
//   }


// let i2 = iPhone2(
//     1,
//     "B09X67JBQV",
//     7.8,
//     "IOS",
//     "128mb"
//   );
// //   ---- properties
//   console.log(i2.ASIN); // 1
//   console.log(i2.color); // "B09X67JBQV"
//   console.log(i2.display); // 7.8
//   console.log(i2.camera); // "IOS"
//   console.log(i2.bluetooth); // "128GB"

// //   ---- methods
//   console.log(i2.dial()); // "tring.. tring..."
//   console.log(i2.sendMessage()); // "Sending message..."
//   console.log(i2.cameraClick()); // "Camera clicked"
//   console.log(i2.connectBluetooth()); //"Bluetooth connected successfully..."






// PROBLEM IPHONE 3 
// function iPhone3(ASIN, color, display, camera, bluetooth, bodyColor, width, cameraSpec, osVersion) {
//     this.ASIN = ASIN 
//     this.color = color 
//     this.display = display
//     this.camera = camera  
//     this.bluetooth = bluetooth

//     this.dial = function() {
//       return "tring.. tring...";
//     };

//     this.sendMessage = function() {
//       return "Sending message...";
//     };

//     this.cameraClick = function() {
//       return "Camera clicked";
//     };

//     this.connectBluetooth = function() {
//       return "Bluetooth connected successfully...";
//     };
//   }








// let i3 = {};
// iPhone3.call(i3, "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");
// // ---- properties
// console.log(i3.ASIN); // 1
// console.log(i3.color); // B09X67JBQV
// console.log(i3.display); // 7.8
// console.log(i3.camera); // IOS
// console.log(i3.bluetooth); // 128mb

// // ---- methods
// console.log(i3.dial()); // "tring.. tring..."
// console.log(i3.sendMessage()); // "Sending message..."
// console.log(i3.cameraClick()); // "Camera clicked"
// console.log(i3.connectBluetooth()); // "Bluetooth connected successfully..."


///////////////////////////////
//PROBLEM IPHONE 4 ES6 CLASSES



//    class Iphone4{
//     constructor(ASIN, color, display, camera, bluetooth) {
//         this.ASIN = ASIN 
//         this.color = color 
//         this.display = display
//         this.camera = camera  
//         this.bluetooth = bluetooth
//       }

//         dial() {
//           return "tring.. tring...";
//         };

//         sendMessage() {
//           return "Sending message...";
//         };

//         cameraClick() {
//           return "Camera clicked";
//         };

//         connectBluetooth() {
//           return "Bluetooth connected successfully...";
//         };

//    }
// let i4 = new Iphone4(
//     1,
//     "B09X67JBQV",
//     7.8,
//     "IOS",
//     "128mb",
//     "Gray",
//     "90mm",
//     "2.0 MP",
//     "5.1"
//   );
// //   ---- properties
//   console.log(i4.ASIN); // 1
//   console.log(i4.color); // B09X67JBQV
//   console.log(i4.display); // 7.8
//   console.log(i4.camera); // IOS
//   console.log(i4.bluetooth); // 128mb

// //   ---- methods
//   console.log(i4.dial()); // "tring.. tring..."
//   console.log(i4.sendMessage()); // "Sending message..."
//   console.log(i4.cameraClick()); // "Camera clicked"
//   console.log(i4.connectBluetooth()); // "Bluetooth connected successfully..."


//QUESTION NO 9;
//FACTORY FUNCTION PROBLEM


function animal(noOfLegs, vegeterian) {

  let obj = {}
  obj.noOfLegs = noOfLegs;
  obj.vegeterian = vegeterian;

  obj.eat = function () {
     return "eating..."

  }
  obj.greet = function () {
   return `Hi, I have ${noOfLegs} legs.`

  }
  return obj;
}






// let a1 = animal(4, true);
// console.log(a1.eat()); // eating...
// console.log(a1.greet()); // Hi, I have 4 legs.



//SAME PROBLEM IN CONSTRUCTOR FUNCTION 
  
function AnimalCF(noOfLegs, vegeterian) {
  this.noOfLegs = noOfLegs;
  this.vegeterian = vegeterian;

  this.eat = function () {
     return "eating..."

  }
  this.greet = function () {
   return `Hi, I have ${this.noOfLegs} legs.`

  }
}




// let animalCF = new AnimalCF(4, true);
// console.log(animalCF.eat()); // eating...
// console.log(animalCF.greet()); // Hi, I have 4 legs.



//SAME PROBLEM IN ES6 CLASS
class AnimalES6{
  constructor(noOfLegs, vegeterian) {
    this.noOfLegs = noOfLegs;
    this.vegeterian = vegeterian;
  }
  
    eat() {
       return `eating...`
  
    }
    greet() {
     return `Hi, I have ${this.noOfLegs} legs.`
  
    }
}

let animalES6 = new AnimalES6(4, true);
console.log(animalES6.eat()); // eating...
console.log(animalES6.greet()); // Hi, I have 4 legs.
