function pigIt(str){
  return str.replace(/\w+/g, s => s.slice(1) + s.slice(0, 1) + "ay")
}

pigIt("Hello, world !")