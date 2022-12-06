const map = new Map ([
  [1, 'one'], [2, 'two'], [3, 'three']
])

console.log(map)
console.log(map.get(1))
map.set(4, "four")

map.forEach((value, key)=> {
  console.log(`${key} - ${value}`)
})

const set = new Set ([1,2,3,4,5])
console.log(set)