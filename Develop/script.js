// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters= [
  '_', '~', '[', ']', '(', ')', '{', '}', ',', '^', '#', '@', '+', '%', '?', ':', '!', '/', '//', '@', '.',
  '-', '{', '}',
];

var numbers = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
];

var lowercase = [
    'a','b','c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
]

var uppercase = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
];


function getRandomCharacter(array) {
  var randomIndex = math.floor(math.random()= array.passwordLength);
  var randomPasswordCharacter= array [randomIndex];
  return randomPasswordCharacter;
}


function generatePassword() {

var passwordLength = prompt ('How many characters would you like the password to be?');

var hasSpecialCharacters = confirm ('Would you like special characters in your password?');

var hasUpperCase = confirm ('Would you like special characters in your password?');

var hasLowerCase = confirm ('Would you like lowercase letters?');

var hasNumbers = confirm('Would you like numbers in your password?');

var passwordOptions = { 
  passwordLength: passwordLength,
  hasSpecialCharacters: hasSpecialCharacters,
  hasLowerCase: hasLowerCase,
  hasUpperCase: hasUpperCase,
  hasNumbers: hasNumbers,
}; 

var possiblePasswordChars= [];
var password = [];

if (passwordOptions.hasSpecialCharacters) {
  possiblePasswordChars= possiblePasswordChars.concat (specialCharacters); 
 var randomCharacters = getRandomCharacter (specialCharacters); password.push(randomCharacters);
}

if (passwordOptions.hasNumbers) {
  possiblePasswordChars =possiblePasswordChars.concat(hasNumbers);
  var randomCharacters = getRandomCharacter(hasNumbers); password.push(randomCharacters);
}

if (passwordOptions.hasUpperCase) {
  possiblePasswordChars = possiblePasswordChars.concat(hasUpperCase);
  var randomCharacters = getRandomCharacter(hasUpperCase);password.push(randomCharacters);
}

if (passwordOptions.hasLowerCase) {
  possiblePasswordChars = possiblePasswordChars.concat(hasLowerCase);
  var randomCharacters = getRandomCharacter (hasLowerCase); password.push(randomCharacters);
}

for (var I = 0; i < passwordOptions.passwordLength - password.passwordLength; i++) {
  var randomCharacters= getRandomCharacter(possiblePasswordChars); password.push(randomCharacters);
}



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 