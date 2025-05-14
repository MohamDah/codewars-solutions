// https://www.codewars.com/kata/514a024011ea4fb54200004b/javascript
function domainName(url){
  return url.replace(/.*\/\//, "").replace(/www\./, "").replace(/\..*$/, "");
}

console.log(
  domainName("http://google.com")
  // domainName("www.xakep.ru")
)