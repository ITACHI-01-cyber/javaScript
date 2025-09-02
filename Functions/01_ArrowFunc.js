    const user ={
        username : "vivek",
        price : 999,

        welcomeMessage : function() {
            console.log(`${this.username} welcome to website`);
            // console.log(this)
        }

    }

    // user.welcomeMessage()
    // user.username = "bob"
    // user.welcomeMessage()
    // console.log(this)

// function one(){
//     let user = "vivek"
//     console.log(this.user)// this.attribute not work in function
// }
// one()

// const two = function() {
//     let username = "vivek"
//     console.log( username)
// }
// two()

const two = () => {
    let username = "vivek"
    console.log(this)
}
// two()

// const addtwo = (n1 , n2) => {
//     return n2+n1
// }
// console.log(addtwo(8,4))

// const addtwo = (n1 , n2) => (n1 + n2)
// const addtwo = (n1 , n2) => ({username : "vivek"})
// console.log(addtwo(8,4))


// IMMEDIATELY iNVOKED fUNCTION eXPRESIION (IIFE)

(function a() {
    console.log(`db connect`);
})();

(() => {
    console.log(`db connected two`);
}) ();
// a()