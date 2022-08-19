const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('/content','/subfolder','first.txt','utf-8')
const first  = readFileSync('./content/subfolder/first.txt','utf-8')
console.log(first)
const second = readFileSync('./content/subfolder/second.txt','utf-8')
console.log(second)

writeFileSync
('./content/subfolder/third-sync.txt',`${first},${second}`,{flag: 'a'})
