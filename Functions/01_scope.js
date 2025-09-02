
// var c = 300;

// let a =300;
// if(true){
// let a = 10;
// const b = 20;
// console.log("inner",a);

// }


// console.log(a,b,c); it become out of scope.
// console.log(c);// but 30 is printed due a reason.
// console.log(a);


function a () {
    const username = "vivek"

    function b() {
        const age = 18;
        console.log(username);
    }
    // console.log(age);

    b()
}
a()

if (true) {
    const user = "vivek"
    if(user === "vivek"){
        const age = 18;
        console.log(user + age);
    }
    // console.log(age);// eroor due to scope
}
// console.log(user);// out of scope


// _____________________________IMP___________________________________________________

    console.log((addone(5)));
    function addone(value){
        return value+1
    }
    // addone(5)

    // console.log(addtwo(5))// it is not exicute 
    const addtwo = function addone(value){ // IT IS NOT FUNCTION IT IS EXPRESSION
        return value +2
    }
    // console.log(addtwo(5))