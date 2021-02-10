/* -password options/requirements
  minimum char-8   max-128

  checkbox (?) options that can be added to PassWord
  options are; lowercase, uppercase, numeric, and/or special characters

  Array.prototype.copyWithin() - Copies a sequence of array elements within the array
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods
*/





// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

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
    return;
  }else {
    userLow = window.confirm('Would you like to include Lower case letters?');
    userUP = window.confirm('Would you like to include Upper case letters?');
    userNum = window.confirm('Would you like to include Numbers?');
    userSPCH = window.confirm('Would you like to include Special Characters?');
  }

  console.log(userUP + ' ' + userLow + ' ' + userNum + ' ' + userSPCH); //just for testing-remove for launch

  var Lower= 'abcdefghijklmnopqrstuvwxyz';
  var Upper= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var Numeric= '0123456789';
  var SpecChar= '!@#$%^&*?=+';

  let randLow
    function getRanLow() {
      if (userLow){
        randLow = Lower.charAt(Math.floor(Math.random() * 26));
      } else {
        return;
      }
    }

    let randUP
    function getRanUP() {
      if (userUP){
        randUP = Upper.charAt(Math.floor(Math.random() * 26));
      } else {
        return;
      }
    }

    let randNum
    function getRanNum() {
      if (userNum){
        randNum = Numeric.charAt(Math.floor(Math.random() * 10));
      } else {
        return;
      }
    }
    
    let randSPCH
    function getRanSPCH() {
      if (userSPCH){
        randSPCH = SpecChar.charAt(Math.floor(Math.random() * 12));
      } else {
        return;
      }
    }


    //loop creating password until userchoice is matched in value to password.length
    function generatePassword() {
      console.log(userUP + ' ' + userLow + ' ' + userNum + ' ' + userSPCH); //just for testing-remove for launch
    
    
      for ( i = 0; i < userchoice; i++) { //this will run until 'i' matches the length of userchoice
            getRanLow();
            getRanUP();
            getRanNum();
            getRanSPCH();
            CharSet = [randLow, randUP, randNum, randSPCH];
            Char = CharSet[(Math.floor(Math.random() * 4))];
            password += Char;
          }


    //let CharSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*?=+"
    /*
    function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
    }
    what if we go get random characters for each type then choose randomly which to use?
    */

    

    //need to account for undefined outcomes of above

    //HERE BEGINS THE SELECTIONS & ADDING THOSE SELECTIONS TO PASSWORD
    //put each type choice into an array, then choose from the array for each character

  getRanLow()
  getRanUP()
  getRanNum()
  getRanSPCH()
  console.log(randUP + ' ' + randLow + ' ' + randNum + ' ' + randSPCH); //just for testing-remove for launch

  }//end of generatePassword()
  
  if (userUP || userLow || userNum || userSPCH) {
    generatePassword()
  } else {
    return;
  }

  var passwordText = document.querySelector("#password"); 
  passwordText.value = password;
  placePW = document.createElement("HTMLTextAreaElement")
  placePW.textContent = pas


}//end of writePassword()


// Write password to the #password input
//this will be the function that will put password on the page itself

/*var password = generatePassword();
var passwordText = document.querySelector("#password"); 
passwordText.value = password;*/

// generateBtn.addEventListener("click", writePassword);

//character # requirments

//password strength options; lower/upper case, numbers, special characters