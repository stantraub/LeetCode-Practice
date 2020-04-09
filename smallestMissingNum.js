function findSmallestInt(arr) {
    let mySet = new Set(arr)
    let smallest = Math.min(...arr)
    let largest = Math.max(...arr)

    for (let i = smallest; i <= largest; i++) {
        if (!mySet.has(i)) {
            return i
        }
    }

    return -1

}