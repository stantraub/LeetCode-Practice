var lastStoneWeight = function (stones) {
    if (stones.length < 2) return stones;
    while (stones.length > 1) {
        let index1 = stones.indexOf(Math.max(...stones));
        let stone1 = stones.splice(index1, 1);
        let index2 = stones.indexOf(Math.max(...stones));
        let stone2 = stones.splice(index2, 1);
        stones.push(stone1 - stone2);
    }
    return stones;
};

console.log(lastStoneWeight([1,4,2,5,3,5,6]))