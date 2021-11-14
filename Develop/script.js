// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// include lowercase, uppercase, numeric, and/or special characters
let lowercase = "abcefghijklmnopqrstuvwxyz"
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numeric = "0123456789"
let special = "!@#$%^&*()-_=+{}[]':;/?\|~`,.<>"



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
