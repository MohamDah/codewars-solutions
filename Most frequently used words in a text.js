// https://www.codewars.com/kata/51e056fe544cf36c410000fb/

function topThreeWords(text) {
    let wordArr = text.toLowerCase().split(/[^a-zA-Z\']+/)
    wordArr = wordArr.filter(i => !!i && i !== "'")

    const occs = new Map()
    wordArr.forEach(word => {
        if (occs.has(word)){
            occs.set(word, occs.get(word) + 1)
        } else {
            occs.set(word, 1)
        }
    })
    const sorted = [...occs.entries()].sort((a, b) => b[1] - a[1])

    const result = sorted.slice(0, 3).map(i => i[0])

    return result;
}

console.log(

    topThreeWords(
        //     `In a village of La Mancha, the name of which I have no desire to call to
        //  mind, there lived not long since one of those gentlemen that keep a lance
        //  in the lance-rack, an old buckler, a lean hac'k, and a greyhound for
        //  coursing. An olla of rather more beef than mutton, a salad on most
        //  nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
        //  on Sundays, made away with three-quarters of his income.`
        // "  //wont won't won't "
        "  '  "
    )
)