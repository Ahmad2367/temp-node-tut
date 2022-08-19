const {
    readFile,
    writeFile
} = require('fs');

let first, second;

readFile('./content/subfolder/first.txt', 'utf-8', firstFileReadHanlder);

function firstFileReadHanlder(err, result) {
    if (err) {
        console.log(err)
        return;
    }
    first = result;
    readFile('./content/subfolder/second.txt', 'utf-8', secondFileReadHanlder);
}

function secondFileReadHanlder(err, result) {
    if (err) {
        console.log(err)
        return
    }

    second = result;
    writeFile('./content/subfolder/third-sync.txt', `${first},${second}`, showResult);

}

function showResult(err, result) {

    if (err) {
        console.log(err)
        return
    }
    console.log('File write completed')
}

/// let first = await readfilrokl[[[pp;l(..);
/// let second = await read(....);
/// await writeFile("..", first+' '+ second);
/// console.log('')