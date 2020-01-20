function average(arr) {
    const sum = arr.reduce((a, b) => {
        return a + b
    })
    
    return sum / arr.length
}

console.log(average([6,9,3,24]))