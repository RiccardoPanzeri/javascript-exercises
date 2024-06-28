const convertToCelsius = function(farenheitValue) {
      
      let result =  ((farenheitValue -32) * (5/9));
      if(Number.isInteger(result)){
        return result
      }else{
        return Number(result.toFixed(1));
      }
};

const convertToFahrenheit = function(CelsiusValue) {
    let result = (CelsiusValue * (9/5)) + 32;
    if(Number.isInteger(result)){
      return result;
    }else{
      return Number(result.toFixed(1));
    }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
