fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json()).then(res => console.log(res))
(async() => {
  const data = await fetch("https://dog.ceo/api/breeds/image/random")
  const dataJson = await data.json()
  console.log(dataJson);
})();