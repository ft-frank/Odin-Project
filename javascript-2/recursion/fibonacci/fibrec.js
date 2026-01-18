const fibrec = function (n, index = 2,  row = [0 , 1]) {
    
    if (n==1) {
        return [0]
    }
    if (row.length == n) {
        return row
    }
    row.push(row[index - 2] + row[index -1 ])
    return fibrec(n, index + 1, row)


}

console.log(fibrec(2))