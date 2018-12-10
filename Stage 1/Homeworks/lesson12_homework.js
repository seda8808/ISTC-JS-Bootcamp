

//TASK1
function arrayByNumber(array, x){
      console.log(array.slice(0, x));
}
   arrayByNumber(["one","two","three","four","five"],2);
console.log(arrayByNumber)


//TASK3
var array = [3,2.3,4.2,6,8,2,5];
   var multiply = 1;
   var sum = 0;
    for (var i = 0; i <array.length; i++) {
     
       multiply = multiply * array[i];
       sum = sum + array[i]
    }
console.log(multiply);
console.log(sum);


//TASK4
var array = [9, 2, 4, 8, 1, 2, 3, 4, 5, 6, 6, 7, 4, 8];
   sortedArray = array.sort(function(a, b){return a - b})
   pushSorted = [];

    for (var i = 0; i< array.length; i++) {
        if(array[i+1] != array[i]){
       pushSorted.push(array[i]);
        }
    }
console.log(pushSorted);


//TASK5
var array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
   
   for (let i = array1.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       const x = array1[i];
       array1[i] = array1[j];
       array1[j] = x;
    }
console.log(array1);


