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



const permutations = function(array, index = 1, perms = []) {
    perms.push(array)
    [array[index], array[index-1]] = [array[index - 1], array[index]]
    if (perms.length === factorial(array.length) ) {
        return perms
    }
    else if (index + 1 == array.length) {
        permutations(array, index = 1, perms) }
    else {
        index++
        permutations(array,index,perms)
    }

};




console.log(permutations([1,2]))
// Do not edit below this line
module.exports = permutations;
