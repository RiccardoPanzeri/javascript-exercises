const fibonacci = function(value) {
    if (value == 0){
        return 0;
    }else if(value < 0){
        return "OOPS";
    }else if(value == 1 ||value == 2){
        return 1;
    }
    let result = 2;
    let preceding = result - 1;
    let temp = 0;
    let counter = 3;
    while(counter < value){
        temp = result;
        result += (preceding);
        preceding = temp;
        counter++;
    }

    return result;

};

// Do not edit below this line
module.exports = fibonacci;
