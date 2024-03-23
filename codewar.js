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