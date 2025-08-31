const { log } = require("console");

// declaration
    function sayMyName(){
        console.log("v");
        console.log("i");
        console.log("v");
        console.log("e");
        console.log("k");
    }

// sayMyName()

// ADD two Numbers
    // function addTwoNumber(num1,num2){
    //     console.log(num1+num2);
    // }
    // function addTwoNumber(num1,num2){
    //     let result = num1 + num2
    //     return result
    //     // console.log("vivek");
    // }

    function addTwoNumber(num1,num2){
        return num1 + num2
    }

 const result = addTwoNumber(3,4)
// addTwoNumber("3",4)
// console.log("result:",result);

function loginusermessage(username = "vivek"){
    // if(username === undefined){
    //     console.log("plz!! enter a username");
    //     return
    // }
    if(!username){
        console.log("plz enter username");
        return
    }
    return `${username} just logged in`
}
 console.log(loginusermessage())

function calculatorCartPrice(...num1){
    return num1
}
// console.log(calculatorCartPrice(200,300,300));

const user ={
    username: "vivek",
    age: 13
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.age}`);
}
handleobject(user)

const MyNewArray = [100,200,300,400]

function reutnSecondValue(getArray){
    return getArray[3]
}
console.log(reutnSecondValue(MyNewArray))