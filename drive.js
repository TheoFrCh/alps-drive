const fs = require('fs/promises')

function listFolder() {
    const readPromise = fs.readdir('.', { withFileTypes: true })
    const trasformedPromise = readPromise.then((dirents) => {
        const myFilesArray = []
        dirents.forEach(dirent => {
            myFilesArray.push({
                name: dirent.name,
                isFolder: dirent.isDirectory()
            })
        });
        return myFilesArray

    })
    return trasformedPromise
}

module.exports = {
    list: listFolder
}