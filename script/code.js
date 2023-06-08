let farBtn =document.querySelector('#covert-F');
let celBtn= document.querySelector('#Convert-C')
let inputCel= document.querySelector('#input-cel')
let inputFar= document.querySelector('#input-far')
let pDisplay = document.querySelector('#display')
let numb = ''

farBtn.addEventListener('click', (e)=>
{
    
      let numb = (inputCel.value * (9 / 5) +32)
    
    console.log(numb);
    pDisplay.innerHTML += `
<p id="display">${numb}°F</p>`
    
   
})


celBtn.addEventListener('click', (e)=>
{
    
      let numb = (inputFar.value -32)*(5/9)
    
    console.log(numb);
    pDisplay.innerHTML += `
<p id="display">${numb}°C</p>`
    
   
})

