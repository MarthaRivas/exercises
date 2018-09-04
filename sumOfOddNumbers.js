function sumOfOddNumbers (n) {
    var totaal = 1

    for (var i = 1; i <= n ; i = i + 2) {
        
        totaal = totaal +2  
    }

    return totaal 
}

console.log (sumOfOddNumbers(3))