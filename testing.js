function compare(word1, word2) {
    let letterIndex = 0
    console.log(word1)
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    while (letterIndex < word1.length) {
        letterIndex += 1
        let letter1 = word1.charAt(letterIndex)
        let letter2 = word2.charAt(letterIndex)
        if (alphabet.indexOf(letter1) > alphabet.indexOf(letter2)) {
            return true
        } else if (alphabet.indexOf(letter2) > alphabet.indexOf(letter1)) {
            return false
        }
    }
        
    // if they’re the same word, we’ll exit the loop and it doesn’t matter what we return
    return true
}

console.log(compare("fgh",'fghi'))
    // this should return True if value 1 is alphabetically before value 2, false otherwise
