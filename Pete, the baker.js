// https://www.codewars.com/kata/525c65e51bf619685c000059/javascript

function cakes(recipe, available) {
  const keys = Object.keys(recipe);
  let amount = 0;
  while (keys.every(i => available[i] >= recipe[i])) {
    amount++;
    keys.forEach(i => available[i] -= recipe[i]);
  }
  return amount;
}


console.log(
  cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 })
)