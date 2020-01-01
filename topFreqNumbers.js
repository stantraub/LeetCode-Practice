var topKFrequent = function (nums, k) {
    let freq = {};

    nums.forEach(num => {
        freq[num] ? freq[num] += 1 : freq[num] = 1;
    })

    let res = [];

    let entries = Object.entries(freq).sort((a, b) => b[1] - a[1])
    console.log(entries)
    for (let i = 0; i < k; i++) {
        res.push(parseInt(entries[i][0], 0));
    }

    return res;


};

console.log(topKFrequent([3,0,1,0], 1))