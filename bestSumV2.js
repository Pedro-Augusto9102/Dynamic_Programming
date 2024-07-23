//Not the best solution but it works and doesn't hang with big inputs
const recursionCache = new Map()
const bestSum = (nums, target) => {
    if(recursionCache.has(target)) return recursionCache.get(target)
    if(target === 0) return []
    if(target < 0) return null
    let results = []
    let finalRes = null
    for(let num of nums){
        const remainder = target - num
        const result = bestSum(nums, remainder)
        
        if(result !== null){            
            let combnation = [...result,num]
            recursionCache.set(target,combnation)
            results.push(combnation)
        }
    }
    const cache = new Map()
    for(let i = 0; i < results.length; i++){
        if (!cache.has(i)){
            cache.set(i,results[i])
        }
    }
    for(let i = 0; i < results.length; i++){
        if(finalRes === null || finalRes.length > cache.get(i).length){
            finalRes = cache.get(i)
        }
    }
    return finalRes
}

console.log(bestSum([1,3,4,6,9], 500))