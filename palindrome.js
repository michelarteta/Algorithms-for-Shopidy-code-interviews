//Determine if a string is a palindrome 
//(text that is spelled the same when reversed).

// Questions to ask:
// 1) Is the solution meant to be case sensitive?
// 2) What about punctuation?


// First Approach
function isPalindrome(string) {

  string = string.toLowerCase();
  
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  
  return lettersArr.join('') === lettersArr.reverse().join('');
}

isPalindrome("Madam, I'm Adam");



// Second Approach
function isTextPalindrome(text) {

  if (text === undefined) {
    return false;
  }

  var left = 0;
  var right = text.length - 1;

  while (left < right) {
    if (text[left++] !== text[right--]) {
      return false;
    }
  }
  return true;
}

function isPhrasePalindrome(text) {
  var chars = text.replace(/[^a-zA-Z]/g, '').toLowerCase();
  return isTextPalindrome(chars);
}

isPhrasePalindrome("Madam, I'm Adam")

// Time complexity of O(n / 2)O(n/2) 
// which is equal to O(n)O(n) since Big-OO notation ignores constant terms.