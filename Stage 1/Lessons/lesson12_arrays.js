
var fruits = ["apple", "banana", "kiwi"];

fruits.toString();

console.log(fruits.toString(), typeof(fruits.toString()));

console.log(fruits.join("/"));

fruits.pop();
console.log(fruits);



fruits.push("orange");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("lemon");
console.log(fruits);

fruits[0] ='apricot';
console.log(fruits);

var fruit = ['banana', 'orange', 'apple', 'mango'];
fruit.splice(2, 0, 'lemon', 'kiwi');
console.log(fruit);
fruit.splice(2, 1, 'peach', 'apricot');
console.log(fruit);


fruit.splice(1,2);
console.log(fruit);

var girls = ['Any', 'Lucie'];
var boys = ['Dave', 'Pete'];

var all = girls.concat(boys);
console.log(all);

var everybody = all.concat('Ann', 'Mary');
console.log(everybody);

var f = ['banaba', 'orange', 'apple', 'mango'];
f.sort();
console.log(f)

var points = [40, 100, 1, 5, 25, 10];
points.sort();
console.log(points);

points.sort(function(a, b) {return a - b}); //callback function
console.log(points);



