//QUESTION 1

function countVowelsAndConsonants(words){
    let vowel = 0;
    let consonant = 0;
    for(let i = 0; i <= words.length; i++){
         if(words[i] == "a" || words[i] == "e"  || words[i] == "i"  || words[i] == "o"  || words[i] == "o"){
            vowel++
         }else{
            consonant++
         }
    }
    console.log(vowel);
    console.log(consonant);
    
    
}




countVowelsAndConsonants("Hello World!");
// console.log(result);
// Output: { vowels: 3, consonants: 7 }

//QUESTION 2


function reverseWords(str) {
    return str.split('').reverse().join('');
}


const result = reverseWords("JavaScript is fun");
console.log(result);
// Output: "tpircSavaJ si nuf"

