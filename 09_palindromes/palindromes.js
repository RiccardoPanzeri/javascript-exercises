const { lowerCase } = require("case-anything");

const palindromes = function (string) {
    string = string.replaceAll("!", "");
    string = string.replaceAll(",", "");
    string = string.replaceAll(".", "");
    string = string.replaceAll(" ", "");
    string = lowerCase(string);
    const array = string.split("");
    let reverseString = "";
    array.reverse();
    array.forEach(element => {
        reverseString += element;
        
    });
    
    if(reverseString === string){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
