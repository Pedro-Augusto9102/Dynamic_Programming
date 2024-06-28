const cache = new Map()
cache.set(1,1)
cache.set(0,1)

const fib = (n) => {
    if(n <= 2) return 1
    if(cache.has(n)) return cache.get(n)
    let result = fib(n-1) + fib(n-2)
    cache.set(n, result)
    return result
}


console.log(fib(100))