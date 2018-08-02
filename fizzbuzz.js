//"Write a program that prints the numbers from 1 to n. 
//But for multiples of three print “Fizz” instead of the number 
//and for the multiples of five print “Buzz”. 
//For numbers which are multiples of both three and five print “FizzBuzz”."

function fizzBuzz(n) {
  
  let i;
  
  for (i = 1; i <= n; i++) {

    if(i % (3 * 5) === 0 ) {
      //For numbers which are multiples 
      //of both three and five print “FizzBuzz”."
      console.log('Fizz Buzz');

    } else if (i % 5 === 0) {
      //for the multiples of five 
      //print “Buzz”. 
      console.log('Buzz');

    } else if (i % 3 === 0) {
      //for multiples of three 
      //print “Fizz”
      console.log('Fizz')
    } else {
      console.log(i)
    }

  }
}

fizzBuzz(45)