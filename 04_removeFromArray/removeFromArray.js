const removeFromArray = function(array, ...valori) {
    let output = [];
    let presente = false;
    for(let x of array){
        for(let y of valori){
            if(x === y){
                presente = true;
                break;
            }
        }
        if(!presente){
            output.push(x);
            
        }
        presente = false;
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
