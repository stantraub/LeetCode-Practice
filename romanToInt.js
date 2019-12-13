function romanToInt(s) {
    let romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let charArr = [...s];
    let res = 0;

    charArr.forEach((char, i) => {
        if (romanValues[charArr[i + 1]] > romanValues[charArr[i]]) {
            res -= romanValues[charArr[i]]
        } else {
            res += romanValues[charArr[i]]

        }
    })

    return res;

}

console.log(romanToInt('MVII'))