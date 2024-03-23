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

form.addEventListener('submit', onSubmit)


const listItem = document.querySelectorAll('li')
const list = document.querySelector('ul')

// listItem.forEach(item => {
//    item.addEventListener('click', e=>{
//       e.target.remove()
//    })
// })

list.addEventListener('click', (e)=>{
   console.log(e.target)

   if(e.target.tagName === 'Li'){
      e.target.remove()
   }
})