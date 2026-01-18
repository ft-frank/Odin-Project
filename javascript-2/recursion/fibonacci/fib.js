const fib = function (n, row = [0 , 1]) {

    if ( n==1) {
        return [0]
    }
    for (i = 2; i < n; i++) {
        row.push(row[i -2] + row[i -1])
    }

    return( row )

}


