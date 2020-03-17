var asteroidCollision = function (asteroids) {
    let stack = []

    for (const asteroid of asteroids) {
        if (stack.length < 1 || asteroid > 0) {
            stack.push(asteroid)
        } else {
            while (true) {
                let last = stack[stack.length - 1]
                if (last < 0) {
                    stack.push(asteroid)
                    break
                } else if (last === -asteroid) {
                    stack.pop()
                    break
                } else if (last > -asteroid) {
                    break
                } else {
                    stack.pop()
                    if (stack.length < 1) {
                        stack.push(asteroid)
                        break
                    }
                }
            }
        }
    }

    return stack
};