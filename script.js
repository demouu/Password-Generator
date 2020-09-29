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
var getPasswordLength = prompt("How Long Would You Like Your Password? 8 - 128 Characters.");
// Get Password Special Characters, Confirm
// Get Password UpperCase Characters, Confirm
// Get Password LowerCase Characters, Confirm
// Get Password Numbers, Confirm
console.log(getPasswordLength);
}
getInfo()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
