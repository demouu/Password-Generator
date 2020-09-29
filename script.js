// Assignment Code
var generateBtn = document.querySelector("#generate");
var howManyChars = 0;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function getInfo() {
// Get Password Length, Prompt 8 to 128 Characters
var getPasswordLength = parseInt(prompt("How Long Would You Like Your Password? 8 - 128 Characters."));
//If statement to get a number
if (isNaN(getPasswordLength)) {
  alert("Try Again, Enter a Number.");
  getInfo();
} else if (getPasswordLength < 8 || getPasswordLength > 128) {
  alert("Try Again, Enter a Number Between 8 and 128.");
  getInfo();
}
// Get Password Special Characters, Confirm
// Get Password UpperCase Characters, Confirm
// Get Password LowerCase Characters, Confirm
// Get Password Numbers, Confirm
console.log(getPasswordLength);
}
getInfo()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
