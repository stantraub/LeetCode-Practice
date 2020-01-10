var frequencySort = function (s) {
    let freq = {};
    let letters = s.split('')

    for (const letter of letters) {
        freq[letter] ? freq[letter] += 1 : freq[letter] = 1
    }

    let sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);

    let res = '';

    for (let i = 0; i < sorted.length; i++) {
        let count = 0;

        while (count < sorted[i][1]) {
            res += sorted[i][0]
            count++
        }
    }

    return res

};