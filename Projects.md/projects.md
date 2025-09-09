# Project related to DOM

## Project Link:
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Source Code File
[Path] (1.Colorchange)
(2.)

# Solution code

##Project 01

```javascript
    console.log("vivek")
   const buttons =  document.querySelectorAll('.butoon')
//    console.log(buttons)
const body = document.querySelector("body")

buttons.forEach(function(button){
   // console.log(button);
        button.addEventListener('click',function(event){ 
        //console.log(event);
       // console.log(event.target);
       if(event.target.id === 'grey'){
         body.style.backgroundColor = 'grey';
       }
       if(event.target.id === 'white'){
         body.style.backgroundColor = 'pink';
       }
       if(event.target.id === 'blue'){
         body.style.backgroundColor = 'skyblue';
       }
       if(event.target.id === 'yellow'){
         body.style.backgroundColor = 'yellow';
       }

    });
})

```