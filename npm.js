// npm --- global command, comes with node


// local dependency -- 
// npm i <packageName>

//global dependency --- 
// npm install -g <packageName>


// package.json == manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init == y (everything default)


const lodash = require('lodash')

const items = [1,[2,[3,[4,[5]]]]]

const newItems = lodash.flattenDeep(items)

for(let i=0; i<newItems.length;i++)
{
    console.log(newItems[i])
}
