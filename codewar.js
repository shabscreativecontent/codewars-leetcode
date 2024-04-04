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

// // OR

const vowels = 'aeiou';

function disemvowels(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}




// SET TIMEOUT - CLEAR TIMEOUT

// setTimeout(changeHeading, 2000)
const timeId = setTimeout(changeHeading, 2000)

function changeHeading(){
  document.querySelector('h1').innerHTML = "Hello World!"
}

document.querySelector('.button').addEventListener('click', ()=>{
  console.log(timeId);
  clearTimeout(timeId)
  console.log("Cancel Timeout");
}) 


// SET INTERVAL - CLEAR INTERVAL

let intervalId

function changeColor(){
  if(document.body.style.backgroundColor !== "black"){
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
  } else {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  }
}

function changeRandomColor(){
  const randowColor = Math.floor(Math.random() * 16777215).toString(16)
  console.log(randowColor);
  document.body.style.backgroundColor = `#${randowColor}`
}

document.querySelector('.start').addEventListener('click', (e)=>{
  if(!intervalId){
    intervalId = setInterval(changeRandomColor, 1000)
  }
})

document.querySelector('.stop').addEventListener('click', (e)=>{
  intervalId = clearInterval(intervalId)
})

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



// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

const allSheep = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(sheep) {
  let presentSheep = 0

  sheep.forEach(present => {
    if(present){
      presentSheep++
    }
  })

  console.log(presentSheep);
}

countSheeps(allSheep)

// OR

function countSheep(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

function helloWorld(){
  return "Hello World!"
}

console.log(helloWorld());