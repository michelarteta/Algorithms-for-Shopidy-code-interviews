function primeNumbersFinder(n) {
  var primeNumbers = []
  
  // Assume all numbers are prime
  for (var i = 0; i < n; i++) {
    primeNumbers[i] = true
  }

  // Exclude 0 and 1
  primeNumbers[0] = false;
  primeNumbers[1] = false;

  // Loop all numbers in the array primeNumbers up to the Sqrt. 
  for (i = 2; i < Math.sqrt(n); i++) {
    // Loop all numbers up to n 
    //multiply for i to find the non prime numbers
    for (j = 2; j * i < n; j++) {
      primeNumbers[i * j] = false;
    }
  }

  // Store the results 
  var results = [];
  for (var i = 0; i < primeNumbers.length; i++ ) {
    if(primeNumbers[i] === true) {
      results.push(i)
    }
  }
  return results;
}

primeNumbersFinder(20)
// primeNumbers = [2,3,5,7,11,13,17,19]