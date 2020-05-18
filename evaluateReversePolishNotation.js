var evalRPN = function (tokens) {
    let stack = []
    let operators = "+-*/"

    for (const token of tokens) {
        if (operators.includes(token)) {
            let y = stack.pop()
            let x = stack.pop()

            if (token === '+') {
                stack.push(x + y)
            } else if (token === '-') {
                stack.push(x - y)
            } else if (token === '*') {
                stack.push(x * y)
            } else if (token === '/') {
                stack.push(Math.trunc(x / y))
            }
        } else {
            stack.push(parseInt(token))
        }
    }

    return stack[0]
}