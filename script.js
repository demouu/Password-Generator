// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", ",", ".", "?", "-", "+", "=", "<", ">"];
var lowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  // Get Password Length, Prompt 8 to 128 Characters
  var getPasswordLength = parseInt(prompt("How Long Would You Like Your Password? 8 - 128 Characters."));
  // If statement to get a number
  if (isNaN(getPasswordLength)) {
    alert("Try Again, Enter a Number.");
    generatePassword();
  } else if (getPasswordLength < 8 || getPasswordLength > 128) {
    alert("Try Again, Enter a Number Between 8 and 128.");
    generatePassword();
  }
  // Get Password Special Characters, Confirm
  var askSpecialChar = confirm("Do you want special characters in your password?");
  // Get Password UpperCase Characters, Confirm
  var askUpperCase = confirm("Do you want Upper Case characters?");
  // Get Password LowerCase Characters, Confirm
  var askLowerCase = confirm("Do you want Lower Case characters?");
  // Get Password Numbers, Confirm
  var askNum = confirm("Do you want numbers in your password?");
  var allChars = {
    length: getPasswordLength,
    special: askSpecialChar,
    lower: askLowerCase,
    upper: askUpperCase,
    numeral: askNum,
  }
  console.log(allChars);
  return allChars;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);