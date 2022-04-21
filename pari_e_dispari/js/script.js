let userChoice;
let userNumber;

do{
  userChoice = prompt('scegli pari o dispari').toLowerCase();
}while(userChoice !== 'pari' && userChoice !== 'dispari')

do{
  userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
}while(isNaN(userNumber) || userNumber < 0 || userNumber > 5)

console.log(`Il tuo numero è ${userNumber} e hai scelto: ${userChoice}`);

//generare un numero casuale per il computer

function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const computerNumber = randomNumber(1, 5);
console.log(`Il numero del computer è: ${computerNumber}`);

//controllare il vincitore
function checkForWinner(userNumber, computerNumber, choice){
  let oddOrEven;
  let sum = userNumber + computerNumber;
  let result;

  if(sum % 2 === 0){
    oddOrEven = 'pari'
  }else{
    oddOrEven = 'dispari'
  }

  if(choice === oddOrEven){
    result = 'Hai vinto';
  }else{
    result = 'Il computer ha vinto';
  }

  return result;
}

const winner = checkForWinner(userNumber, computerNumber, userChoice);

console.log(winner);