const calculateStrings = require('./stringCalculator');

function areEqual(expected, actual, message){
    if(expected == actual){
        return (message + ' - passed');
    };
    return (message + ' - failed');

}
console.log(areEqual(2, calculateStrings('2'), 'Calculator should return number when number is given'));
console.log(areEqual(3, calculateStrings('2,1'), 'Calculator should return sum two of numbers when two numbers given'));
console.log(areEqual(16, calculateStrings('2,1,6,2,5'), 'Calculator should return sum of five numbers when two numbers given'));

