console.log("------------Synchronous-----------------")

function greeet(name,callback){
    console.log("Hi "+name)
    callback();
}

function sayBye(){
    console.log("bye")
}
greeet("shravan",sayBye)


console.log("-----------Asynchronous-----------------")

function Hello(name,callback){
    console.log("Hi "+ name)

    setTimeout(()=>{
        callback()
    },2000)
}

function Bye(){
    console.log("bye")
}
Hello("shravan",Bye)
console.log("end........")