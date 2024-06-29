const findTheOldest = function(array) {
    let oldest = array[0];
    let temp = 0;
    let age = 0;
    let now = new Date();
    for(let element of array){
        if(element.yearOfDeath === undefined){
            age = now.getFullYear()- element.yearOfBirth;
            console.log("age undefined : " + age + now.getFullYear());
        }else{
            age = element.yearOfDeath - element.yearOfBirth;
            console.log("age defined : " + age);
        }
        if(age > temp){
            temp = age;
            oldest = element;
            console.log(temp);
        }
        
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
