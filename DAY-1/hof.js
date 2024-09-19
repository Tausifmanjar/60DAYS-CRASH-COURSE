//     A higher - order function in JavaScript is a function that either:
// Takes one or more functions as arguments, or
// Returns a function as its result.
// These functions are a key aspect of functional programming and enable patterns like function composition, currying, and creating more reusable, modular code.


// FOR EACH
// The reduce() function in JavaScript is a method used to reduce an array to a single value by applying a callback function on each element of the array.It operates on the array from left to right, accumulating a result(accumulator) based on the callback's logic.

let strings = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "pear",
    "apple",
  ];
//   function uniqueString(arr){
//      arr.reduce((acc, cur) => {
//       return  acc + cur
//      },"")
//   }
//  console.log(uniqueString(strings));

 function uniqueString(arr){
    return arr.reduce(function(accumulator, currentValue) {

      if(accumulator[currentValue]){
         accumulator[currentValue]++
      }else{
         accumulator[currentValue] = 1
      }
      
      return accumulator;
   
   }, {});
   


 }
 console.log(uniqueString(strings));
 




 //const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];

 function IdentifyNum(arr){
    return arr.reduce((acc, cur) => {
        if(cur%3 == 0 || cur%5 == 0){
           return acc + cur
        }
        return acc;
    }, 0)
 }

//  console.log(IdentifyNum(numbers));
 
  



 let str = [
   "Hello",
   "world",
   "this",
   "is",
   "an",
   "example",
   "array",
   "of",
   "strings",
 ];
 
 function swapFirstAndLast(str) {
   if (str.length <= 1) return str; 
   
   let firstChar = str[0];
   let lastChar = str[str.length - 1];
   
   let middlePart = '';
   for (let i = 1; i < str.length - 1; i++) {
     middlePart += str[i];
   }
   
   return lastChar + middlePart + firstChar;
 }
 
 let swappedStrings = str.map(swapFirstAndLast);
 
 console.log(swappedStrings); 







 //SUM OF SQUARE OF ALL ODD NUMBERS
 

   let array = [1, 2, 3, 4, 5, 7];


   function allNum(arrNum){
        let oddNum = arrNum.filter(num => num%2==1)
        let square = oddNum.map(num=> num*num)
        let sum = square.reduce((acc , cur) => {
           return acc + cur     
        },0)
        return oddNum , square , sum 
   }
   console.log(allNum(array));
   
