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

function createDirectory(name) {
    const createdFolder = fs.mkdir(name)
    return createdFolder
}
function deleteDirectory(name) {
    const deleteFolder = fs.rmdir(name)
    return deleteFolder
}

module.exports = {
    list: listFolder,
    create: createDirectory,
    delete: deleteDirectory
}