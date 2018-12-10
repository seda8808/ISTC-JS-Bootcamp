



//self invoked
(function myFunction1() {
alert (3 + 6);

}) ()

var sum = 0
function someSpace (p1, p2) {
    for(i = p1; i <= p2; i++) { 
    sum = sum + i; 

    } return sum

}

console.log(someSpace(1, 10))

//Task 1
var sum1 = 0
function someSpace1 (p1, p2) {
    for (j = p1; j >= p2; j--) {
        sum1 = sum1 + j

    } return sum1
}
console.log(someSpace1(10,1))



function someSpace2 (p1, p2) {
    var sum2 = 0;
    for(k = p1; k <= p2; k++) {
        sum2 = sum2 + k 
    } console.log(sum2)
    var sum3 = 0
    for (k = p2; k >= p1; k--) {
        sum3 = sum3 + k
    } console.log(sum3)
}
someSpace2(1,10) 

//Task2
function Person (p1, p2, p3) {

    var Me = {
        firstName: p1,
        lastName: p2,
        age: p3
    };
    return(Me)
}

console.log(Person("Seda", "Gharagedyan", 30))

