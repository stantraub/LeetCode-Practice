class Observer {
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

let observable = new Observable()



observable.subscribe()


