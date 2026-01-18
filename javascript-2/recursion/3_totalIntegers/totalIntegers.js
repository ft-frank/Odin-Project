

const totalIntegers = function(structure) {
    let count = 0

    if (Array.isArray(structure)) {
        structure.forEach((item) => {
            if (Number.isInteger(item)) {
                count++
            }
            else {
                count += totalIntegers(item)
            }
        })}
    else if (typeof structure === "object") {
        for (const item in structure) {

            if (Number.isInteger(structure[item])) {
                count++
                
            }
            else {
                count += totalIntegers(structure[item])
            }
        }
    }

    return count




};

  
// Do not edit below this line
module.exports = totalIntegers;
