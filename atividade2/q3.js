
const endpoints = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://api.github.com/users/Th7-Sousa"
]

const promises = endpoints.map(url => fetch(url).then(res => res.json))

Promise.all(promises).then(valor => console.log(valor))
