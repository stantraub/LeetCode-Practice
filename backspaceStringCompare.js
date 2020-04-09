var backspaceCompare = function (S, T) {
    return compare(S) === compare(T)

    function compare(str) {
        console.log(str)
        let res = []

        for (const char of str) {
            char === "#" ? res.pop() : res.push(char)
        }
        // console.log(res)
        return res.join("")

    }
};


console.log(backspaceCompare("xywrrmp", "xywrrmu#p"))
