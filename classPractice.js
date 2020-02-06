class Callback {
    constructor() {
        this.functionsArr = [];
    }

    subscribe(listener) {
        this.functionsArr.push(listener)
    }

    unsubscribe(listener) {
        let idx = this.functionsArr.indexOf(listener)
        this.functionsArr.splice(idx, 1)
    }

    emit() {
        for (const func of this.functionsArr) {
            console.log(func(...arguments))
        }
    }
}

let test = new Callback()
let func1 = function add2(num) {
    return num + 2
}

let func2 = function mult2(num) {
    return num * 2
}

test.subscribe(func1)
test.subscribe(func2)
// test.unsubscribe(func1)
test.emit(2,4)

