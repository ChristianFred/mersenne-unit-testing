function leapYear(number) {
    if (number % 100 === 0) {
        return false;
    }
    if (number % 4 === 0){
        return true;
    }
    if (number % 400 === 0) {
        return true;
    } else return false; 
}

module.exports = leapYear;