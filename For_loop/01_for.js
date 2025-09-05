// for loop

// for(let i =0; i <= 10; i++){
//         console.log("the number are:",i);
// }

let array = [1,2,3,4,5,6,7]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element === 5){
     //  console.log("no more");
    }
   // console.log(element)
}

// nested Loop
    for (let i = 0; i <= 10; i++) {
       // console.log(`outer loop: ${i}`);
        for(let a = 0; a <= 10; a++){
            //console.log(`inner loop value: ${a} and inner loop: ${i}`)
           // console.log(i + '*' + a + ' = ' + i*a);
        }
    }

    let arr = ['flash','batman','superman']
    console.log(arr.length);
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
    
}