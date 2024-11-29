function countPatternsFrom(firstPoint, length) {
    if (length > 9 || length < 1) {
        return 0;
    }

    if (length === 1) {
        return 1;
    }
    const nodes = new Set(["A", "B", "C", "D", "E", "F", "G", "H", "I"])
    const endArr = []
    const soFar = [firstPoint]
    nodes.delete(firstPoint)
    getPossibs(soFar, nodes, endArr, length)
    return endArr.length
}

function getPossibs(soFar, nodes, endArr, length) {
   
    const opps = {
        "A": {"E": "I", "B": "C", "D": "G"},
        "B": {"E": "H"},
        "C": {"E": "G", "B": "A", "F": "I"},
        "D": {"E": "F"},
        "F": {"E": "D"},
        "G": {"E": "C", "D": "A", "H": "I"},
        "H": {"E": "B"},
        "I": {"E": "A", "F": "C", "H": "G"}
    }
    const newNodes = new Set(nodes)
    if (soFar[soFar.length-1] in opps){
        for (let ol in opps[soFar[soFar.length-1]]) {
            if (nodes.has(ol)) {
                newNodes.delete(opps[soFar[soFar.length-1]][ol])
            }
        }
    }
    for (let node of newNodes){
        const newSoFar = Array.from(soFar)
        newSoFar.push(node)
        if (newSoFar.length === length){
            endArr.push(newSoFar)
        } else {
            const passedNodes = new Set(nodes)
            passedNodes.delete(node)
            getPossibs(newSoFar, passedNodes, endArr, length)
        }
    }
}