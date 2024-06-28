const repeatString = function(string, times) {
    let counter = 0;
    let output = "";
    if(times < 0){
        return "ERROR";
    }
    while(counter < times){
        output += string;
        counter++;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
