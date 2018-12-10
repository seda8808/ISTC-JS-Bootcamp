
//TASK1_Option1
function calculator (par1, par2, par3) {
             switch (par2){
                    case "+":
                           return(par1 + par3);
                    case "-":
                           return(par1 - par3);
                    case "*":
                           return(par1 * par3);
                    case "/":
                           return(par1 / par3);
                    case "%":
                           return(par1 / 100 * par3)
                    default:
                           return ("function not valid")
             }
      }
      console.log(calculator(100, "%", 5))


//TASK1_Option 2
function calculator1 (num1, operator, num2) {
      if (operator == "+") {
           return(num1 + num2);
      } else if (operator == "-") {
           return(num1 - num2)
      } else if (operator == "*") {
           return(num1 * num2)
      } else if(operator == "/") {
           return(num1 / num2)
      } else if (operator == "%"){
           return(num1 / 100 * num2)
      } else {
           return("function not valid")
      }

  }
   console.log(calculator1(100, "%", 4));

    
//TASK2
function type (p1, p2, p3, p4) {
          console.log(typeof p1);
          console.log(typeof p2);
          console.log(typeof p3);
          console.log(typeof p4);

       var s = "";
       var n = 0;  

       if (typeof p1 == 'string') {
            s = s+ p1
       } else {n = n + p1
        }
       
       if (typeof p2 == 'string') {
            s = s + p2
       } else {n = n + p2
        }

       if (typeof p3 == 'string') {
            s = s + p3
       } else {n = n + p3
        }

       if (typeof p4 == 'string') {
            s = s + p4
       } else {n = n + p4
        }
       console.log(s, n);
    
} 

type(3, "Hello ", 4, "World")
