function fac (n)    { 
    var totaal = 1
  

    for (var c = 1; c <= n; c = c + 1) { 
    console.log (c)
        totaal = totaal * c
    


    }
    return totaal

}
console.log (fac (5))