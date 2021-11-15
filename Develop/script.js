// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// include lowercase, uppercase, numeric, and/or special characters
var lowercase = "abcefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "0123456789"
var special = "!@#$%^&*()-_=+{}[]':;/?\|~`,.<>"

function generatePassword() {
  var characters =" "
  var password = " "

  // password size rules 8>x<128
  var passwordSize = prompt("Length of password", "16")
  if(!passwordSize) return

  if(isNaN(passwordSize)) {
    alert ("Enter only numbers.")
    return
  }

  if(passwordSize < 8) {
    alert("Password must be at least 8 characters.")
    return
  }

  if (passwordSize > 128) {
    alert("Password cannot be longer than 128 characters.")
  }

  // prompts
  var lwr = confirm("Would you like lower case characters?")
  if(lwr)characters += lowercase

  var upp = confirm ("Would you like uppercase chracters?")
  if(upp)characters += uppercase

  var num = confirm ("Would you like numbers?")
  if(num)characters += numeric

  var special = confirm ("Would you like to have special characters?")
  if(special)characters += special

  if(characters.length===0) {
    alert("Have at least one character type!!!")
    return
  }

  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
