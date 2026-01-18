const pascal = function(n, row = [1]) {

    if (row.length === n  ) {
        return row
    }
    else {
        row.push(0)
        row.unshift(0)
        const newRow = []
        for (let i = 0; i < row.length - 1; i++) {
            newRow.push(row[i] + row[i+1])
        }
        return pascal(n, newRow)
    }


};
  
// Do not edit below this line
module.exports = pascal;
