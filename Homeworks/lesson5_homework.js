
var morning = 12;
var midday = 12;
var afternoon = 13;
var evening = 20;
var lesson = 12;
var announcement;


//TASK 1
if (lesson == evening) {
    announcement = "lesson starts at 20:00" //first condition is false

} else if (lesson == afternoon) {
    announcement = "lesson starts at 13:00" //second condition is false
}

console.log(announcement) //if we don't offer a condition for "else", the result will be "undefined"


//TASK 2
if (lesson == evening) {
    announcement = "lesson starts at 20:00" //first statement is false

} else if (lesson == morning) {
    announcement = "lesson starts at 12:00" //second statement is true

} else if (lesson == midday) {
    announcement = "lesson starts at midday" //third statement is true

} else {
    announcement = "there is no lesson today" //in case if all three statments were false
}

console.log(announcement) //the result is "lesson starts at 12:00", as it picks the first true condition on its way


var x = 15;
var y = 10;
var z = 10;
var output;


//TASK 3
if (x==y && x==z) {
    output = x + y + z

} else {
    output = x * y * z
}

console.log(output) //the result is 1500, as none of the conditions is true

//TASK 4
if (x==y || y == z) {
    output = x + y + z
} else {
    output = x * y * Z
}

console.log(output) //the result is 35, as one of our conditions is true


//TASK 5
var a = 1 + 100 * 5;

console.log(a) //the answer is 501, as according to operator precendence multiplocation comes before addition

var b = (1 + 100) * 5;

console.log(b) //the answer is 505, as what is inside the parentheses is calculated first


//TASK 6
var participant = {name: "Seda", age: 30}

if (participant.age >= 18) {
    alert ("Participant can attend the conference")
} else {
    alert ("Participant can not attend the conference")
    }

