

//TASK1
function roundNumber (par1, par2) {
let a = par1;
let b = par2;

console.log(a.toFixed(b))
}

roundNumber (10.532534, 3)

//TASK2
function checkNaturalNumber (num) {
    if (typeof(num) !== "number") {
    console.log("Please, insert a number.")
        } else { if (num >= 0 && num.toFixed(0)==num) {
        console.log("This is a natural number.")
        } else {console.log("This is not a natural number.")}
    } 

} 
checkNaturalNumber(10.33)
