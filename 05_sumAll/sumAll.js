const sumAll = function(rangeBegin, rangeEnd) {
    let total = 0;
    let begin;
    let end;
    if(rangeBegin < 0 || rangeEnd < 0 || typeof rangeEnd === "string"|| typeof rangeBegin === "string" ||isNaN(rangeBegin) 
        ||isNaN(rangeEnd)){
        return "ERROR";
    }
    if(rangeBegin > rangeEnd){
        begin = rangeEnd;
        end = rangeBegin;
    }else{
        end = rangeEnd;
        begin = rangeBegin;
    }
    for(let i = begin; i <= end; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
