
//TASK1
 for (var i=0; i < 100; i++) { 
	if ( i % 2 == 0) 
		console.log(i);
	}; 


//TASK2
for (var i=0; i < 100; i++) {
    if (i % 3 == 0 && i % 4 == 0)
        console.log(i);
    }
    


//TASK3

var sum = 0;
for (var i = 0; i <= 10; i++){
    for (var j = i; j <= 10; j++) {
      if (j % i == 0){
         // console.log(j);
    sum += j; }
    }

}

console.log(sum)


// TASK 4
  var sum = 0;
for (var i = 0; i < 100; i++) { 
	if ( i % 2 == 0) {
        sum += i
    }
}
console.log (sum);

