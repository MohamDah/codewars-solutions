import { readFile, writeFile } from "node:fs/promises"

async function pushEnvBlock(blockHeader, filePath = ".env") {
  try {
    let data = await readFile(filePath, "utf-8")
    const blocks = new Map()
    data = data.replace(/#@ (.+?)\n.*?#\$\n*/gs, (match, head) => {
      blocks.set(head, match.trim())
      return ""
    })

    if (blocks.has(blockHeader)) {
      const currBlock = blocks.get(blockHeader)
      blocks.delete(blockHeader)
      blocks.set(blockHeader, currBlock)
      await writeFile(filePath, data.trim() + "\n\n" + [...blocks.values()].join("\n\n"))
    }
    console.log(data)
  } catch (err){
    console.log(err)
  }
}

pushEnvBlock(process.argv[2], process.argv[3])