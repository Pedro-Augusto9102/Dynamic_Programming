const cache = new Map()

const howSum = (target, arr) => {
    if (cache.has(target)) return cache.get(target)
    if (target === 0) return []
    if (target < 0) return null
    for (let num of arr){
        const remainder = target - num
        const remainderResult = howSum(remainder, arr)
        if(remainderResult !== null) {
            cache.set(target,[...remainderResult, num])
            return cache.get(target)
        }
    }
    cache.set(target, null)
    return null
}

console.log(howSum(300,[2,14]))