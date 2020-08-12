function calculateString(input){
    if(input === undefined){
        return 0;
    }else {
        if(validateString(input)){
            result = 0;
            numbers = input.split(new RegExp(',|\n'));
            numbers.forEach(number => {
                if(!isNaN(number)){
                    result += parseInt(number);
                }
            });
            return result;
        }else{
            return (String.raw`Number expected but new line found at position ` + input.search(',\n').toString());
        }
    }
};

function validateString(stringToCheck){
    stringToCheck = stringToCheck.search(',\n');
    if(stringToCheck !== -1){
        return false;
    }else{
        return true;
    }
}

module.exports = calculateString;


