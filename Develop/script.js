/* -password options/requirements
  minimum char-8   max-128

  checkbox (?) options that can be added to PassWord
  options are; lowercase, uppercase, numeric, and/or special characters

  Array.prototype.copyWithin() - Copies a sequence of array elements within the array
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods
*/


let alpha = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let numeric = [0,1,2,3,4,5,6,7,8,9];
let SpecChar = ['!','@','#','$','%','^','&','*','?','=','+'];


// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function  writePassword(){
  
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
    userUP = window.confirm('Would you like to include Upper case letters?');
    userLow = window.confirm('Would you like to include Lower case letters?');
    userNum = window.confirm('Would you like to include Numbers?');
    userSPCH = window.confirm('Would you like to include Special Characters?');
  }

  console.log(userUP + ' ' + userLow + ' ' + userNum + ' ' + userSPCH); //just for testing-remove for launch

  

  function generatePassword() {
    console.log(userUP + ' ' + userLow + ' ' + userNum + ' ' + userSPCH); //just for testing-remove for launch
    
    
    
    
    
    
    
    
    
    
    
    


  }
  
  if (userUP || userLow || userNum || userSPCH) {
    generatePassword()
  }



}


// Write password to the #password input
//this will be the function that will put password on the page itself

/*var password = generatePassword();
var passwordText = document.querySelector("#password"); 
passwordText.value = password;*/

// generateBtn.addEventListener("click", writePassword);

//character # requirments

//password strength options; lower/upper case, numbers, special characters