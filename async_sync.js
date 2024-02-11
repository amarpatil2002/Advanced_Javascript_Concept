// synchronace javascript

// const fun2 = () =>{
//     console.log("Func2 called");
// }

// const fun1 = () => {
//     console.log("fuc1 is called ");
//     fun2();
//     console.log("Again fun1 is called");
// } 
// fun1()

// async javascript

const fun2 = () =>{
    setTimeout( () => {
        console.log("Func2 called");
    } , 2000)
}

const fun1 = () => {
    console.log("fuc1 is called ");
    fun2();
    console.log("Again fun1 is called");
} 
fun1()