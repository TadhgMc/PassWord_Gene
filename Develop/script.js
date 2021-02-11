
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//function that holds everything for password creation
function  writePassword(){
  
  //creates variables for user choice of chatacters
  let userUP;
  let userLow;
  let userNum;
  let userSPCH;

  //this creates prompt and will make var userchoice become a number that will be the password length
  let userchoice = window.prompt('How many characters would you like to use? (8-128)'); 

  //asks for number of characters, confirms it is the correct amount, if not then stop, otherwise go ahead
  //and ask character types, then stores the character types as boolean values
  if (!userchoice || userchoice < 8 || userchoice > 128) {
    window.alert('Your password must be at least 8 characters, and no more than 128 characters!')
    return;
  }else {
    userLow = window.confirm('Would you like to include Lower case letters?');
    userUP = window.confirm('Would you like to include Upper case letters?');
    userNum = window.confirm('Would you like to include Numbers?');
    userSPCH = window.confirm('Would you like to include Special Characters?');
  }

  //list of characters
  var Lower= 'abcdefghijklmnopqrstuvwxyz';
  var Upper= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var Numeric= '0123456789';
  var SpecChar= '!@#$%^&*?=+';

  //create variable 'choices' to concat character types into
  var choices;

//if all prompts are chosen
  if (userLow && userUP && userNum && userSPCH) {
    choices = Lower.concat(Upper, Numeric, SpecChar)
  }
  
  //ifs for only 3 prompts selected
   else if (userLow && userUP && userNum) {
    choices = Lower.concat(Upper, Numeric)
  } else if (userLow && userUP && userSPCH) {
    choices = Lower.concat(Upper, SpecChar)
  } else if (userLow && userNum && userSPCH) {
    choices = Lower.concat(Numeric, SpecChar)
  }else if (userUP && userNum && userSPCH) {
    choices = Upper.concat(Numeric, SpecChar)
  }

  //begin ifs for 2 options selected
  else if (userLow && userUP) {
    choices = Lower.concat(Upper)
  }else if (userLow && userNum) {
    choices = Lower.concat(Numeric)
  }else if (userLow && userSPCH) {
    choices = Lower.concat(SpecChar)
  }else if (userNum && userUP) {
    choices = Numeric.concat(Upper)
  }else if (userSPCH && userUP) {
    choices = SpecChar.concat(Upper)
  }else if (userNum && userSPCH) {
    choices = Numeric.concat(SpecChar)
  }

  //ifs for if only 1 option is chosen
  else if (userLow){
    choices = Lower
  }else if (userUP){
    choices = Upper
  }else if (userNum){
    choices = Numeric
  }else if (userSPCH){
    choices = SpecChar
  };

    //loop creating password until userchoice is matched in value to password.length
  function generatePassword() {

    password = '';

    for ( i = 0; i < userchoice; i++) { //this will run until 'i' matches the length of userchoice
      Char = choices[(Math.floor(Math.random() * choices.length))];
      password += Char;
    }

  }//end of generatePassword()
  
  if (userUP || userLow || userNum || userSPCH) {
    generatePassword()
  } else {
    window.alert("You must select at least one character type to create password!")
    return;
  }

  // Write password to the #password input
  //this will be the function that will put password on the page itself
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password;
  
}//end of writePassword()
