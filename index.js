function* getPizzaIngredients() {
  yield "wheat"
  yield "tomato"
  yield "cheese"
  yield "basil"
}

const generatorObject = getPizzaIngredients
console.log(...generatorObject)