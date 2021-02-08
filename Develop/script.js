/* -password options/requirements
  minimum char-8   max-128

  checkbox (?) options that can be added to PassWord
  options are; lowercase, uppercase, numeric, and/or special characters
*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//character # requirments

//password strength options; lower/upper case, numbers, special characters