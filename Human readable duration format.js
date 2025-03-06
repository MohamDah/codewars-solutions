// https://www.codewars.com/kata/52742f58faf5485cae000b9a/javascript

function formatDuration(seconds) {
  let remaining = seconds;
  let endStr = ""

  if (!seconds) return "now"

  const insert = (n, str) => {
    if (endStr) {
      if (remaining) {
        endStr += `, ${n} ${str}${n === 1 ? "" : "s"}`
      } else {
        endStr += ` and ${n} ${str}${n === 1 ? "" : "s"}`
      }
    } else {
      endStr += `${n} ${str}${n === 1 ? "" : "s"}`
    }
  }

  if (remaining >= 60 * 60 * 24 * 365) {
    const years = Math.floor(remaining / (60 * 60 * 24 * 365))
    remaining = remaining % (60 * 60 * 24 * 365)
    
    insert(years, "year")
  }

  if (remaining >= 60 * 60 * 24) {
    const days = Math.floor(remaining / (60 * 60 * 24))
    
    
    insert(days, "day")
    remaining = remaining % (60 * 60 * 24)
  }

  if (remaining >= 60 * 60) {
    const hours = Math.floor(remaining / (60 * 60))
    remaining = remaining % (60 * 60)
    
    insert(hours, "hour")
  }

  if (remaining >= 60) {
    const minutes = Math.floor(remaining / 60)
    remaining = remaining % (60)
    
    insert(minutes, "minute")
  }
  if (remaining) {
    const seconds = remaining
    remaining = 0
    insert(seconds, "second")
  }
  return endStr
}

formatDuration(3662)