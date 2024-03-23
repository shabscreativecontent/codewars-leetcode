// Data Types
// Primitive Types: Stored directly in the "stack"
// Reference Types: Stored in the heap and accessed by reference  Eg: Array, Function, Objects

let d

// Declearing Date
d = new Date()

// Setting Date varables
d = new Date(2021,6,10, 12,30,0)
d = new Date('07/10/2022 12:25:00') 

// Time stands : its express in milli seconds.
d = Date.now()

const m = new Date('07/9/2023 01:34:00')
const t = m.getTime()

d = new Date(t)

d = Math.floor(Date.now() / 1000) // getting the time stand in a second.

// // d = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
let j = new Date()
d = Intl.DateTimeFormat('default').format(j)
d = j.toLocaleString('default', { month: 'long' })
d = j.toLocaleString('default', {
   weekday: 'long',
   year: 'numeric',
   month: 'long',
   day: 'numeric',
   hour: 'numeric',
   minute: 'numeric',
   second: 'numeric',
})



console.log(d);


// Covert to JSON string
post = {
   id: 1
}

const str = JSON.stringify(post)

// Parse JSON
const obj = JSON.parse(str)

console.log(obj);



// EVENTS LISTENERS & MOUSE EVENTS
let button = document.querySelector('button')
let h1 = document.querySelector('h1')

const onClick = () => console.log('Clicked');
function onDoubleClick(){
   console.log('DoubleClicked');

   if(document.body.style.backgroundColor !== "black"){
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
   } else {
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
   }
}
const onRightClick = () => console.log('Right Clicked');
const onMouseDown = () => console.log('Mouse Down');
const onMouseUp = () => console.log('Mouse Up');
const onMouseWheel = () => console.log('Mouse Wheel');
const onMouseOver = () => console.log('Mouse Over');
const onMouseOut = () => console.log('Mouse Out');
const onDragStart = () => console.log('Drag Start');
const onDrag = () => console.log('Dragging');
const onDragEnd = () => console.log('Drag End');

button.addEventListener('click', onClick)
h1.addEventListener('dblclick', onDoubleClick)
h1.addEventListener('contextmenu', onRightClick)
h1.addEventListener('mousedown', onMouseDown)
h1.addEventListener('mouseup', onMouseUp)
h1.addEventListener('wheel', onMouseWheel)
h1.addEventListener('mouseover', onMouseOver)
h1.addEventListener('mouseout', onMouseOut)
h1.addEventListener('dragstart', onDragStart)
h1.addEventListener('drag', onDrag)
h1.addEventListener('dragend', onDragEnd)


// Inputs
const itemInput = document.querySelector('#item-input')
const priorityInput = document.querySelector('#priority-input')
const checkbox = document.querySelector('#checkbox')
const heading = document.querySelector('h1')

function onInput(e){
   // console.log(e.key);
   // console.log(e.target.value);
   heading.textContent = e.target.value
}

function onChecked(e){
   // console.log(e.target.checked);
   const isChecked = e.target.checked

   heading.textContent = isChecked ? 'Checked' : 'Not Checked'
}

function onFocus(e) {
   console.log("Input Focused");
   itemInput.style.outlineStyle = 'solid'
   itemInput.style.outlineWidth = '1px'
   itemInput.style.outlineColor = 'green'
}

function onBlur(e) {
   console.log("Outside the input");
   itemInput.style.outlineStyle = 'none'
}

// itemInput.addEventListener('keypress', onInput)
itemInput.addEventListener('input', onInput)
itemInput.addEventListener('focus', onFocus)
itemInput.addEventListener('blur', onBlur)
priorityInput.addEventListener('change', onInput)
checkbox.addEventListener('input', onChecked)


// Form Input
const form = document.querySelector('#item-form')

function onSubmit(e){
   e.preventDefault()
   
   const input = document.querySelector("#item-input").value
   const priority = document.querySelector('#priority-input').value

   if(input === '' || priority === '0'){
      alert("Please fill all the fields")
      return;
   }
   
   
   console.log(`${input} ${priority}`);
}

function onSubmit2(e){
   e.preventDefault();

   const formData = new FormData(form)

   const item = formData.get('item')
   const priority = formData.get('priority')
   
   // console.log(item, priority);

   const entries = formData.entries()

   for(let entry of entries){
      console.log(entry[1]);
   }


}

form.addEventListener('submit', onSubmit2)



// Event Bubbling
// To Prevent it from happening

button.addEventListener('click', (e)=>{
   console.log("Button was clicked");
   e.stopPropagation()
})

