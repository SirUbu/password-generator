// Assignment code here
var generatePassword = function() {
  var password = ``;
  // use functions to get password length and characters 
  var characterLength= passwordLength(); 
  var characterType = passwordCharacters();

  // using length and characters, loop through to generate random password
  for (var i = 0; i < characterLength; i++) {
    // get length of characterType
    var mathMax = characterType.length;
    // Generate random number with max number of length of characterType
    var charNum = Math.floor(Math.random() * mathMax) + 1;
    // select a character from the characterType using the random number as charAt
    var charChoice = characterType.charAt(charNum);
    // add the random charChoice to the password
    password = password + charChoice;
  }

  return password;
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

// function to get character type
var passwordCharacters = function() {
  var characters = ``;
  var lowerCase = `abcdefghijklmnopqrstuvwxyz`;
  var upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  var specialChar = `!@#$%^&*()-=_+;:'",<.>/?[{]}`;

  // while the characters var is an empty string, ask the user if they want to add the different character options
  while (!characters) {
    alert(`Your password must contain at least one of the following: \nLower Case Characters \nUpper Case Characters \nSpecial Characters`);

    var lowerConfirm = confirm(`Would you like to include lower case characters: \nabcdefghijklmnopqrstuvwxyz \nOK = YES\n Cancel = NO`);
    if (lowerConfirm) {
      characters = characters + lowerCase;
    }

    var upperConfirm = confirm(`Would you like to include upper case characters: \nABCDEFGHIJKLMNOPQRSTUVWXYZ \nOK = YES\n Cancel = NO`);
    if (upperConfirm) {
      characters = characters + upperCase;
    }

    var specialConfirm = confirm(`Would you like to include special characters: \n!@#$%^&*()-=_+;:'",<.>/?[{]} \nOK = YES\n Cancel = NO`);
    if (specialConfirm) {
      characters = characters + specialChar;
    }

    // have user confirm choices. If user want's to change, reset characters var and restart while loop
    var confirmCharacters = confirm(`Are you sure you'd like your password to include the following characters: \n${characters}`);
    if (!confirmCharacters) {
      characters = ``;
      alert("Please make your character selections again.");
    }
  }

  return characters;
}

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
