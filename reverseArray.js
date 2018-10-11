
function reverseArray(array) {

	// divide the array.length in half to avoid 
	// go though the whole array. 

	for (let i = 0; i < array.length / 2; i++) {

		//store the array value on a temp variable
		var tempVar = array[i];
		//assign for example array[8] value in array [0] position
		array[i] = array[array.length - 1 - i];
		//assign array[0] value to array[8] position
		array[array.length - 1 - i] = tempVar;
	}

	return array;
}

// reverseArray([1, 2, 3, 4, 5, 6, 7, 8]);
reverseArray([1, 2, 3, 4, 5, 6, 7]); // return 7,6,5,4,3,2,1