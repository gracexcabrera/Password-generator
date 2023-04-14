// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  '_', '~', '[', ']', '(', ')', '{', '}', ',', '^', '#', '@', '+', '%', '?', ':', '!', '/', '//', '@', '.',
  '-', '{', '}',
];

var numbers = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
];

var lowercase = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
]

var uppercase = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];


function getRandomCharacter(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomPasswordCharacter = array[randomIndex];
  return randomPasswordCharacter;
}


function generatePassword() {

  var passwordLength = prompt('How many characters would you like the password to be?');

  var hasSpecialCharacters = confirm('Would you like special characters in your password?');

  var hasUpperCase = confirm('Would you like uppercase characters in your password?');

  var hasLowerCase = confirm('Would you like lowercase letters?');

  var hasNumbers = confirm('Would you like numbers in your password?');

  var passwordOptions = {
    passwordLength: passwordLength,
    hasSpecialCharacters: hasSpecialCharacters,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumbers: hasNumbers,
  };

  var possiblePasswordChars = [];
  var password = [];

  if (passwordOptions.hasSpecialCharacters) {
    possiblePasswordChars = possiblePasswordChars.concat(specialCharacters);
  }

  if (passwordOptions.hasNumbers) {
    possiblePasswordChars = possiblePasswordChars.concat(numbers);}

  if (passwordOptions.hasUpperCase) {
    possiblePasswordChars = possiblePasswordChars.concat(uppercase);
  }

  if (passwordOptions.hasLowerCase) {
    possiblePasswordChars = possiblePasswordChars.concat(lowercase);
  }

  
  for (var i = 0; i < passwordOptions.passwordLength; i++) {
    var randomCharacters = getRandomCharacter(possiblePasswordChars);
     password.push(randomCharacters);
    console.log(i)
    console.log(password.length)
  }

  let text = password.join ("");
  console.log ("text", text)
  return text
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
