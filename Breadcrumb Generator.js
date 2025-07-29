// https://www.codewars.com/kata/563fbac924106b8bf7000046/solutions/javascript
function generateBC(url, separator) {
  const pathParts = getPathParts(url);
  if (pathParts.length === 0) return `<span class="active">HOME</span>`
  const parsedPP = acronymize(pathParts);
  const htmlArr = toHTMLArr(pathParts, parsedPP)

  return htmlArr.join(separator)
}

function getPathParts(url) {
  url = url.replace("https://", "")
  url = url.replace("http://", "")
  const path = url.split("/").slice(1);
  if (path.length === 0) return path
  path[path.length - 1] = path[path.length - 1].replace(/[#?.].*/, "");
  if (path[path.length - 1].includes("index") || !path[path.length - 1])
    path.pop()
  return path;
}

function acronymize(pathParts) {
  const toIgnore = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"];
  return pathParts.map(part => {
    if (part.length <= 30) return part.toUpperCase().replaceAll("-", " ");
    return part
      .split("-")
      .filter((i) => !toIgnore.includes(i))
      .map(i => i[0])
      .join("")
      .toUpperCase();
  });
}

function toHTMLArr(pathParts, parsedPP) {
  const htmlArr = [`<a href="/">HOME</a>`];
  let currUrl = "/"
  for (let idx = 0; idx < parsedPP.length; idx++) {
    if (idx === parsedPP.length - 1) {
      htmlArr.push(`<span class="active">${parsedPP[idx]}</span>`);
    } else {
      currUrl += `${pathParts[idx]}/`
      htmlArr.push(`<a href="${currUrl}">${parsedPP[idx]}</a>`)
    }
  }
  return htmlArr
}



console.log(
  // generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp", " : ")
  // generateBC("www.microsoft.com/docs/index.htm", " : ")
  // generateBC("www.codewars.com/users/GiacomoSorbi", " / ")
  generateBC("http://www.agcpartners.co.uk", " / ")
);

// '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO-SORBI</span>'
// '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>'