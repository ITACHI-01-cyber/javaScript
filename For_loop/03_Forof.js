// For of LOOp
    const arr = [1,2,3,4,5]

    for (const i of arr) {
        //console.log(`array element ${i}`);
    }

const greeting = "hello!!"
for (const greet of greeting) {
    if(greet == "l"){
        break;
    }
   // console.log(greet);
}

// Maps 
    const map = new Map()
    map.set('In', "INDIA")
    map.set('usa',"America")
   // console.log(map);

for (const [key,value] of map) {
    //console.log(key, ':-',value)
}

const myobj ={
    game1 : 'nfs',
    game2 : 'spiderman',
    game3 : 'gost of tushima'
}
// for (const i of myobj) {
//     console.log(i);
// }
for (const key in myobj) {
    //console.log(`the game no:${key} name is:${myobj[key]}`);
}

let arr2 = ['vivek','sagar','jd','sia']
for (const key in arr2) {
   // console.log(`the index no:${key} the name are:${arr2[key]}`);
}

 const min = new Map()
    min.set('In', "INDIA")
    min.set('usa',"America")
    // for (const key in min) {
    //     console.log(`the shortform is: ${key} the country name is: ${min[key]}`)
    // } // can't ittrate map()
     