const cache = new Map()

const canConstruct = (target,wordBank) => {
    if(cache.has(target)) return cache.get(target)
    if(target === "") return true
    
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length)
            const result = canConstruct(suffix,wordBank)
            cache.set(target,result)
            if(result === true){
                return true
            }
        }
    }
    cache.set(target,false)
    return false
}
let wd = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef"
let wdbank = ["e","ee","eee","eeee","eeeeeef"]
console.log(canConstruct(wd,wdbank))