const cache = new Map()

const bestSum = (target, arr) => {
    if(cache.has(target)) return cache.get(target)
    if (target === 0) return []
    if (target < 0) return null

    let shortest = null
    
    for (let num of arr){
        const decreasedTarget = target - num
        const result = bestSum(decreasedTarget, arr)
        
        if(result !== null){
            const combnation = [...result, num]
            cache.set(target,combnation)
            if(shortest === null || combnation.length < shortest.length) shortest = combnation
        }
    }    
    return shortest
}
console.log(bestSum(10,[1,2,3,4,5]))