
// we can loop through object only by for in

var obj = {
    1: "bye",
    2: "string"
}
for (var key in obj) {
    console.log(key)
}

var person = {
firstName: "Seda",
lastName: "Gharagedyan",
}

for (var key in person) {
    console.log(key);
    console.log(person[key]);
}

var x = "hello";

var y = {
    prop: 2
};

if (typeof(x) == typeof(y.prop)) {
    console.log("the types are the same")
}else  {console.log("the types are not the same")
}

var person1 = {
    firstName: "Seda",
    lastName: "Gharagedyan",
    age: 30,
    currentYear: 2018,

    
};

person1.yearOfBirth = function() {return this.currentYear - this.age},
console.log(person1.yearOfBirth())

person1.fullName = function() {
    return "This is your full name: " + this.firstName + " " + this.lastName
    },

console.log(person1.fullName())


var x = {};

var y = new Object ();
y.p1 = "text1"
y.p2 = "text2"

console.log(Object.keys(y), Object.values(y));
