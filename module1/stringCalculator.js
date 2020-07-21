function calculateStrings(input){
    if(input == undefined){
        return 0;
    }else {
        result = 0;
        numbers = input.split(',');
        numbers.forEach(number => {
            if(!isNaN(number)){
                result += parseInt(number);
            }
        });
        return result;
    }
};
module.exports = calculateStrings;



