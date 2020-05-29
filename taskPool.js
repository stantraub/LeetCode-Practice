class TaskPool {
    constructor() {
        this.queue = []
    }

    run() {
        return Promise.all(this.queue)
        .then((res) => {
            this.queue = []
            console.log(res)
        })
        .then(() => console.log('Ready to accept new tasks'))
    }
}

const maxConcurrency = async (max) => {
    let urls = [
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/comments',
        'https://jsonplaceholder.typicode.com/albums',
        'https://dog.ceo/api/breeds/list/all',
        'https://jsonplaceholder.typicode.com/todos',
        'https://jsonplaceholder.typicode.com/users'
    ]
    let pool = new TaskPool(max)

    for  (const url of urls) {
        if (pool.queue.length < max) {
            pool.queue.push(url)
        } else {
            await pool.run()
        }
    }
}

maxConcurrency(2)