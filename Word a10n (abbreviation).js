// https://www.codewars.com/kata/5375f921003bf62192000746/javascript
function abbreviate(string) {
  return string.replace(/[a-z]+/ig, subst => subst.length >= 4 ? `${subst[0]}${subst.length - 2}${subst.at(-1)}` : subst)
}

console.log(
  abbreviate('internationalization')
)