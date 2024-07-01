const cache = new Map()

const canSum = (target, arr) => {
    if(cache.has(target)) return cache.get(target)
    if(target === 0) return true
    if(target < 0) return false
    for (let num of arr){
        const remainder = target - num
        if (canSum(remainder, arr) === true) {
            cache.set(target,true)    
            return true
        }
    }
    cache.set(target, false)
    return false
}

console.log(canSum(300, [2,3,5,7,9])) //True