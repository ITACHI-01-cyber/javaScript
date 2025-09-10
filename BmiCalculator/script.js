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


