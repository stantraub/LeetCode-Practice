function mystery(x, y) {
    while (x !== y) {
        if (x > y) {
            x = x - y
            console.log(x)
        } else if (x < y) {
            y = y - x
            console.log(y)
        }
    }

    return x
    
}   

console.log(mystery(2437, 875))