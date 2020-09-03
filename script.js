// Assignment Code
var generateBtn = document.querySelector("#generate");
var possibleCharacters = "";
var numbers = "0123456789";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "~`!@#$%^&*()-_=+{}[]|/?.<>,";
var password = "";

// for (var i = 0; i < passwordLength; i++) {
//     var possibleCharacters = getRandom(possibleCharacters);

//     password += possibleCharacters;
// }

// Write password to the #password input
// function generatePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword());
function generatePassword() {
  var passwordLength = prompt(
    "How many characters would you like your password to have? The minimum number of characters is 8, and the maximum is 128."
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a number between 8 and 128.");
    return;
  }

  var confirmLower = confirm("Would you like to include lower case letters?");

  var confirmUpper = confirm("Would you like to include upper case letters?");

  var confirmNum = confirm("Would you like to include numbers?");

  var confirmSpecial = confirm("Would you like to include special characters?");

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

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    var randomElement = possibleCharacters[randomIndex];
    password = password += randomElement;
    console.log(password);
  }
  return password;
}
getRandom();

// function getRandom(array) {
//   var randomIndex = Math.floor(Math.random() * array.length);
//   var randomElement = array[randomIndex];
// }
//   return randomElement;

//allow me to add elements from an array to another array to make big array and randomly call items from larger array
//for loop number of times = number loops=user input number

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page //
