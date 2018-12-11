
    //TASK1
function concatString(text, n) {
var counter = text.repeat(n);
return counter;
}

console.log(concatString("Hello ", 10))

//TASK2
var arr1 = [2,4,["string", 6,8], "hello",7,[4, 9, "name"], -2, 14,-6];
var arr2 = [];

for (var i = 0; i< arr1.length; i++){

if ( Array.isArray(arr1[i])){
console.log(arr1[i]);
arr2.push(arr1[i]);
}
};
console.log((arr2));


//TASK3

function checkPalindrome(str) {
var l = str.length;
   for (var i = 0; i < l / 2; i++) {
       if (str.charAt(i) !== str.charAt(l - 1 - i)) {
           return false;
       }
   }
   return true;
}
console.log(checkPalindrome("abba"));
