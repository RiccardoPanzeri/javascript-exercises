const reverseString = function(stringa) {
    const vettore = stringa.split("");
    let output = "";
    for( let i = -1; i >= -(vettore.length); i--){
        output += vettore.at(i); 

    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
