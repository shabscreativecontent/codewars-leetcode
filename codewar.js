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

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str, n) {
  // Your code here
  let doubleC = []

  for (let j = 0; j < str.length; j++) {
    for(let i = 0; i < n; i++){
      doubleC = doubleC.concat(str[j])
    }
  }

  console.log(doubleC.join(''));
}

// OR

function doubleChar1(str) {
	var word = '';
  for (var i = 0; i < str.length; i++){
  	word = word + str[i] + str[i];
  };
  return word;
};

doubleChar('bigBoy', 2)


// Given an arry of number, return an array of each number, squared

const num = [1, 2, 3, 4, 5]
const newNum = num.map(number => number * number)

console.log(newNum);


// given an array of strings, return an array where the first letter of each string is capitalized

const names = ['alice', 'bob', 'charlie', 'danielle']

let capsArr = names.map(word => {
  return word[0].toUpperCase() + word.slice(1)
})

console.log(capsArr)



// Given: ["Bulbasaur", "Charmander", "Squirtle"]
// Return: [<p>"Bulbasaur"</p>, <p>"Charmander"</p>, <p>"Squirtle"</p>]

const givenP = ["Bulbasaur", "Charmander", "Squirtle"]

const domElement = givenP.map(sentence => `<p>${sentence}</p>`)

console.log(domElement);

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



// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.


function sum(arr){
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total
}

console.log(sum([]));

// OR

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  //...
  if (bool) {
    return "Yes"
  } else {
    return "No"
  }
}

console.log(boolToWord(false));

// OR

function boolToWord1( bool ){
  return bool ? 'Yes':'No';
}


// React Event loop
// Using setState method by using React.useState()

//// const {things, setThings} = React.useState(['things 1', 'things 2'])

function addItem(){
  const newThingText = `things ${things.length + 1}`
  setThings(prevState => [...prevState, newThingText])
}

// Challenge: Replace our hard-coded "Yes" on the page with some state initiated with React.useState()

function App(){
  ////const [answer , setAnswer] = React.useState(['thing 1', 'thing 2'])

  function handleClick(){
    setAnswer(prevState => [...prevState, `things ${prevState.length + 1}`])
  }
}


// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false


function setAlarm(employed, vacation){
  if(employed === true && vacation === false){
    return true
  }else {
    return false
  } 
}

console.log(setAlarm(true, false));

// OR

const setAlarm1 = (employed, vacation) => employed && !vacation;

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  // moment of truth
  let inLove

  if(flower1 % 2 === 0 && flower2 % 2 === 0){
    inLove = false
  } else if(flower1 % 2 === 1 && flower2 % 2 === 1){
    inLove = false
  } else {
    inLove = true
  }

  return inLove
}


console.log(lovefunc(2, 5));

// OR

function lovefunc1(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  // Code here
  const total = s1 + s2 + s3 
  let divTotal = total / 3
  if (divTotal < 60) {
    return "F"
  } else if(divTotal < 70){
    return "D"
  } else if(divTotal < 80){
    return "C"
  }else if(divTotal < 90){
    return "B"
  } else if(divTotal <= 100){
    return "A"
  }

  // console.log(divTotal);
}
