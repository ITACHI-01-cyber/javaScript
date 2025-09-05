// fro each loop
    const coding  = ["js","rubby","java","pyhton"]
    coding.forEach(element => {
       // console.log(element)
    });

        function printme(val){
          //  console.log(val)
        }
//coding.forEach(printme)
        // coding.forEach((item,index,arr) => {
        //     console.log(item,index,arr);
        // })

// object in an array

    MyCodding = [
        {
            languageNmae :"javascript",
            langugaeFilename : "js"
        },
        {
            languageNmae :"python",
            langugaeFilename : "py"
        },
        {
            languageNmae :"ruby",
            langugaeFilename : "ry"
        },
    ]
    MyCodding.forEach((item,index,arr) => {
        console.log(item.languageNmae , index,arr)
    });