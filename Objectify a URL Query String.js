// https://www.codewars.com/kata/5286d92ec6b5a9045c000087/javascript
function convertQueryToMap(query) {
  const searchParams = new URLSearchParams(query)
  const objected = {}
  searchParams.forEach((v, k) => {
    const keys = k.split(".")
    let current = objected

    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i]
      if (!current[key]) 
        current[key] = {}

      current = current[key]
    }
    current[keys[keys.length - 1]] = v
  })
  return objected
}

console.log(
  convertQueryToMap("user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue")
)