// TASK: Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


function disemvowel(str) {
   let vowels = ['a','e','i','o','u']
   let result = ''
 
   for(let i = 0; i < str.length; i++){
     if (!vowels.includes(str[i].toLowerCase())) {
       result += str[i]
     }
   }
   
   return result;
 }
 
 console.log(disemvowel("shedRAck love food"));