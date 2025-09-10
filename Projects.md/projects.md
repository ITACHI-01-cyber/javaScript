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
##Project 02

```javascript
      const form = document.querySelector('form')
//This usecase give you empty value...
// const height = parseInt(document.querySelector('#height').value )

form.addEventListener('submit', function(e){
    e.preventDefault();
  const height = parseInt(document.querySelector('#height').value )
  const weight = parseInt(document.querySelector('#weight').value )
    const results = document.querySelector('#results')
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML =` Please Give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML =` Please Give a valid weight ${weight}`;
    }
    else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if( bmi <  18.6 ){
      results.innerHTML = `Under Weight and BMI is ${bmi}`;
    }
    if (bmi >  18.6 || bmi < 24.9){
      results.innerHTML = `Normal Range and BMI is ${bmi}`;
    }
    if(bmi > 24.9){
      results.innerHTML = `Over weight and BMI is ${bmi}`;
    }
    }
});