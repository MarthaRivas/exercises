function driehoeksgetald (n) {
var totaal = 0

    for (var t = 1; t <= n; t = t + 1){ 
     totaal = totaal + t
     
       
    }

    return totaal
}

console.log(driehoeksgetald(1))
console.log(driehoeksgetald(5))
console.log(driehoeksgetald(6))