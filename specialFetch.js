const urls = ['https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/comments']
const fetch = require("node-fetch");


function doneFetching() {
    console.log("all URLs done fetching!")
}


function fetching(urls) {
    return new Promise((resolve, reject) => {
        let completed = 0
        let res = []
        urls.forEach((url, index) => {
            fetch(url).then(result => {
                res[index] = result
                completed++

                if (completed === urls.length) {
                    resolve(res)
                }
            }).catch(err => reject(err))
        })
    })
}

fetching(urls)
.then(res => doneFetching())









// Promise.all(
//     urls.map(url => {
//         return fetch(url).then(resp => resp.json())
//     })
// ).then(results => {
//     console.log("done fetching")
// })