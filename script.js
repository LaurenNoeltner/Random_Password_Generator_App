// variable statements
var possibleCharacters = "";
var numbers = "0123456789";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "~`!@#$%^&*()-_=+{}[]|/?.<>,";
var finalPass = "";

//Add Event Listener to generate button
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

//main password function
function generatePassword() {
  var passwordLength = prompt(
    "How many characters would you like your password to have? The minimum number of characters is 8, and the maximum is 128."
  );
  //Prompt for password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a number between 8 and 128.");
    return;
  }
  // Confirm Character type
  var confirmLower = confirm("Would you like to include lower case letters?");

  var confirmUpper = confirm("Would you like to include upper case letters?");

  var confirmNum = confirm("Would you like to include numbers?");

  var confirmSpecial = confirm("Would you like to include special characters?");
  //If true, alert user to selected character types
  if (confirmNum) {
    possibleCharacters += numbers;
    console.log(possibleCharacters);
    alert("You have chosen to include numbers.");
  }
  if (confirmLower) {
    possibleCharacters += lower;
    console.log(possibleCharacters);
    alert("You have chosen to include lower case letters.");
  }
  if (confirmUpper) {
    possibleCharacters += upper;
    console.log(possibleCharacters);
    alert("You have chosen to include upper case letters.");
  }
  if (confirmSpecial) {
    possibleCharacters += special;
    console.log(possibleCharacters);
    alert("You have chosen to include special characters.");
  }
  //For-Loop and equation
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    var randomElement = possibleCharacters[randomIndex];
    finalPass = finalPass + randomElement;
  }
  console.log(finalPass);
  return finalPass;
}
