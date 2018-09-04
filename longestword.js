function longest(words) {
    var longestWord = words [0]

    for (var i = 1; i < words.lenght; i = i + 1 )
    { var word = words [i]
        if (word.length > longestWord.length) {
             longestWord = word
        }


    }
    return longestWord
}

console.log (longest ([ 'a', 'bb']))