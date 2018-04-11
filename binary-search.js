/** 
*
* Problem: Given a sorted array of integers, return the index of the given key. 
* Return -1 if not found.
*
* */


const theArray = [20, 30, 50, 60, 90, 120, 240, 250];
const givenKey = 90;


/** Solution **/
// Result = 3
// [ 0,  1,  2,  3,  4,   5,   6,   7]
// [20, 30, 50, 60, 90, 120, 240, 250]


/** Approach Binary search. (algorithm) **/
//Definition: Search a sorted array by repeatedly dividing the search interval in half. 
//Begin with an interval covering the whole array. 
//If the value of the search key is less than the item in the middle of the interval, 
//narrow the interval to the lower half 


let binary_search = function(array, key) {

	const min = 0;
	const max = theArray.length - 1; // zero base index -1.  

	while (min <= max) {

		let half = min + Math.floor((max - min) / 2);

		if (theArray[half] === givenKey) {
			return half;
		}

		console.log(half)

		if(givenKey < theArray[half]) {
			max = half - 1;
		} else {
			min = half + 1;
		}
	} 

	return -1;
}


binary_search(theArray, givenKey);

