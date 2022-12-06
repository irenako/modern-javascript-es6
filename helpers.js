const score = [90, 19, 23, 89, 12, 64]

// score.forEach(point => {
//   console.log(`${point > 50 ? 'Higher then' : 'Lower than or equal '} 50`);
// })

// const scoreWords = score.map(point => {
//   return point > 50 ? 'higher' : 'lower'
// })
// console.log(scoreWords)

// const findEl = score.find(score => score < 50)
// console.log(findEl)

// const elIndex = score.indexOf(findEl)
// console.log(elIndex)

// const thirdEl = score.slice(3, elIndex)
// console.log(thirdEl)

const team = [
  { name: 'John', nationality: "American", points: 100},
  { name: 'Natasha', nationality: "Ukrainian", points: 75},
  { name: 'Jessica', nationality: "British", points: 80},
  { name: 'Will', nationality: "Canadian", points: 96},
]
const points = team.map(member => member.points)
console.log(points)

const totalPoints = points.reduce((acc, cur) => 
  acc+cur, 500
)
console.log(totalPoints)