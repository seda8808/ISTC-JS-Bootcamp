
//TASK1
var a = {
    prop1: 10,
    prop2: 15,
    prop3: 20
};

console.log(a.hasOwnProperty("prop1"), a.hasOwnProperty("prop4"));

//TASK2
var b = {
1: "aaa",
2: "bbb",
3: "ccc",
4: "ddd",
};
let x = 1;
for (var key in b) {
    if(x == 3) {delete b[key]; break
    } x++
} 
console.log(b);


//TASK3
var c = {
    1: "xxx",
    2: "yyy",
    3: "zzz",
    4: "nnn",
}
var length = 0;

for (var key in c) {
    if (c.hasOwnProperty(key)) {
        length++
    }
}
console.log(length);

//TASK4
var dailySales = new Object();
dailySales.productQuantity = 100;
dailySales.productPrice = 500;
dailySales.productTypes = 5;

dailySales.productSum = function() {return this.productQuantity * this.productPrice};
dailySales.productAverageQty = function() {return this.productQuantity / this.productTypes};

dailySales.monthlySales = function() {return 30 * this.productSum()};

console.log(dailySales.productSum(), dailySales.productAverageQty(), dailySales.monthlySales());


