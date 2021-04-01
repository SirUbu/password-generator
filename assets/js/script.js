// Assignment code here
var generatePassword = function() {
  var characterLength= passwordLength(); 
  var characterType = passwordCharacters();

  return characterType;
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
  var characters = "";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = `!@#$%^&*()-=_+;:'",<.>/?[{]}`;

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
  }

  var confirmCharacters = confirm(`Are you sure you'd like your password to include the following characters: \n${characters}`);

  debugger;
  if (!confirmCharacters) {
    alert("Please make your character selections again.");
    passwordCharacters();
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
