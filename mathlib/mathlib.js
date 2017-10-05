module.exports = function (){
    return {
      add: function(num1, num2) { 
           // add code here 
           console.log("Sum of numbers is: ", num1 + num2);
      },
      multiply: function(num1, num2) {
           // add code here 
           console.log("Product of numbers is: ",num1 *num2);
      },
      square: function(num) {
           // add code here 
           console.log("Square of number is: ", num1*num1);
      },
      random: function(num1, num2) {
           // add code here
           console.log("Random number between numbers is:", Math.floor(Math.random()*num2) + num1);
      }
    }
  };

  
  
  
  