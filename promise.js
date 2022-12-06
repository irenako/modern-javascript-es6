const promiseToWalkDog = new Promise ((resolve, reject) => {
  let hasWalkedDog = true;
  if (hasWalkedDog) {
    resolve ('I have walked the dog')
  } else {
    reject ('I didnt walked the dog')
  }
})

promiseToWalkDog.then(
  fromResolve => {
  console.log(`Did you walk the dog? ${fromResolve}`)
}, 
  fromReject => {
  console.log(`Did you walk the dog? ${fromReject}`)
})