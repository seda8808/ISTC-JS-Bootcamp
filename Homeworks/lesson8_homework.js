
//TASK1
function primeNumber(num) {

    if (num === 1) {
        return("1 is not a prime number")

  } else
 for(var i = 2; i < num; i++)

 if(num % i === 0) {
        return("this number is composite")
     }  {
        return("this number is prime")
    }
}
console.log(primeNumber(11))


//TASK2

function typeOfArgument(parameter) {

 let dataType = {
    key1: "string", 
    key2: "number",
    key3: "boolean",
    key4: "null", 
    key5: "undefined", 
    key6: "object", 
    key7: "array", 
    key8: "function"

  }
        if (typeof(parameter) == dataType.key1) {
            console.log("data type is STRING")
        } else if (typeof(parameter) == dataType.key2) {
            console.log("data type is NUMBER")
        } else if (typeof(parameter) == dataType.key3) {
            console.log("data type is BOOLEAN")
        } else if (typeof(parameter) == dataType.key4) {
            console.log("data type is NULL")
        } else if (typeof(parameter) == dataType.key5) {
            console.log("data type is UNDEFINED")
        } else if (typeof(parameter) == dataType.key2) {
            console.log("data type is OBJECT")
        } else if (typeof(parameter) == dataType.key2) {
            console.log("data type is ARRAY")
        } else if (typeof(parameter) == dataType.key2) {
            console.log("data type is FUNCTION")
        } else {
            console.log("data type is not defined")
        }
    
    }

    typeOfArgument("Hello World")


//TASK3

function returnObject (p1, p2, p3, p4) {

    let participant = {
        name: p1,
        lastName: p2,
        gender: p3,
        age: p4
    }
    console.log(participant)
}
returnObject("Seda", "Gharagedyan", "female", 30)


// TASK4
function square(a) {

    if (typeof(a) == "number" && a != 0) {

        return a = a * a
    } else return "inserted data is not a number"
}

console.log(square(-10))


