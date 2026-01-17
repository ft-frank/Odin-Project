const factorial = function(integer) {

    if (integer === 1 || integer === 0) {
        return 1
    }

    if (integer < 0) {
        return
    }

    if (!Number.isInteger(integer) || typeof integer == "string" || Array.isArray(integer)){
        return
    }
    

    else {
    return (integer * factorial(integer - 1 )) }

    
        
}
    
    
// Do not edit below this line
module.exports = factorial;