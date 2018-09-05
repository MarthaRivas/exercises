function maxArray([a]) {
    var max = a [0]


    for (var i = [1] ; i <= a.lenght; i = i +1)
    {
        if ( a [i] > max) {
            return  a [i]
        }

    }
    return max
}

                  

console.log(maxArray([1, 2, 33, 4]))