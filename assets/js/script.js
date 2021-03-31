// Assignment code here
var generatePassword = function() {
  var characterLength= passwordLength(); 

  return characterLength;
};

// function to get password length
var passwordLength = function() {
  // prompt user for length
  var length = parseInt(prompt("How long would you like your password to be? \nMinimum length is 8, max length is 128. \nPlease enter a number from 8 to 128:"));

  // ensure user entry is acceptable response
  while (length < 8 || length > 128 || !Number.isInteger(length)) {
    length = parseInt(prompt("Please enter a valid number from 8 to 128."));
  }
  return length;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
