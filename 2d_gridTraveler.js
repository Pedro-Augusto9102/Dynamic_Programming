const cache = new Map()
cache.set(1+','+1,1)

const gridTraveler = (i,j) => {
    if (cache.has(i+','+j)) return cache.get(i+','+j)
    if (i === 0 || j === 0) return 0
    if (i === 1 && j === 1) return 1
    
    let result =  gridTraveler(i-1,j) + gridTraveler(i,j-1)
    cache.set(i+','+j,result)
    return result
}

console.log(gridTraveler(100,100))