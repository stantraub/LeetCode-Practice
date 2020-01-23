function abbreviator(str) {
    str.split("")
    let abbreviated = ""
    let hash = {"be" : {"right" : { "back" : 'BRB'}}}
    for (let i = 0; i < str.length; i++) {
        if (!hash[str[i]]) {
            abbreviated += str[i]
            continue
        }
        
        if (hash[str[i]]) {
            
        }
    }

    return abbreviated;
}

console.log(abbreviator('be right back'))