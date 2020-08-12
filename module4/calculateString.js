function calculateString(input){
    if(input === undefined){
        return 0;
    }else {
        let result = 0;
        let separator = setSeparator(input);
        let errorString = '';
        let arrayOfNegativeNumberErrors = [];

        input = removeCustomSeparatorDeclaration(input);
        numbers = input.split(new RegExp( separator + '|\n'));

        if(!validateString(input,separator)){
            errorString = errorString + (String.raw`Number expected but new line found at position ` + input.search(',\n').toString());
        }

        if(numbers[numbers.length -1] == ''){
            errorString = errorString + 'Number expected but EOF found';
        }

        numbers.forEach(number =>{
            if(number < 0){
                arrayOfNegativeNumberErrors.push(number);
           }
        });
        
        if(arrayOfNegativeNumberErrors.length !== 0){
            errorString = errorString + (String.raw`Negative not allowed : ` + arrayOfNegativeNumberErrors);
        }

        if(!separatorAfterSeparator(input, separator)){
            errorString = errorString +  `Number expected but '${separator}' found at position ${input.search(separator+separator)+1}`;
        }
        
        if(errorString != ''){
            return errorString;
        }
        numbers.forEach(number => {
            if(!isNaN(number)){
                    if(number >= 0)
                {
                    result += parseInt(number);
                }
            }
        });
        return result;
    }
};

function validateString(stringToCheck, separator){
    stringToCheck = stringToCheck.search(separator+'\n');
    if(stringToCheck !== -1){
        return false;
    }else{
        return true;
    }
}

function setSeparator(stringToCheck){
    if(stringToCheck.startsWith('//')){
        let endingIndexToSeparator = stringToCheck.search('\n');
        return stringToCheck.slice(2,endingIndexToSeparator);
    }else{
        return ',';
    }

}

function removeCustomSeparatorDeclaration(stringWithDeclaration){
    if(setSeparator(stringWithDeclaration) != ','){
        let endingIndexToSeparator = stringWithDeclaration.search('\n');
        return stringWithDeclaration.slice(endingIndexToSeparator+1,stringWithDeclaration.length);
    }else{
        return stringWithDeclaration;
    }
}
function separatorAfterSeparator(stringToCheck,separator){
    stringToCheck = stringToCheck.search(separator+separator);
    if(stringToCheck !== -1){
        return false;
    }else{
        return true;
    }
}

module.exports = calculateString;


