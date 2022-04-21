const userWord = prompt('Inserire una parola');
const wordChars = userWord.toLowerCase().split('');

/**
 * Description: take the characters from the word and creates a new one spelled backwords
 * @param {array} characters array
 * @returns {string} the word spelled backword
 */
function createBackwordWord(charsArray){
  let newWord = "";

  for(let i = charsArray.length - 1; i >= 0; i--){
    const character = charsArray[i];
    newWord += character;
  };

  return newWord;
}

const backwordWord = createBackwordWord(wordChars);

/**
 * Description take the word insert by the user and confronts it with the backword word to check if it's palindrome
 * @param {any} word insert by the user
 * @param {any} backwordWord created by createBackwordWord()
 * @returns {boolean}
 */
function checkIfPalindrome(word, backwordWord){
  let result = false;
  if(word.toLowerCase() === backwordWord){
    result = true;
  }

  return result;
}

if(checkIfPalindrome(userWord, backwordWord)){
  console.log('La parola inserita è palindroma');
}else{
  console.log('La parola inserita non è palindroma');
}
