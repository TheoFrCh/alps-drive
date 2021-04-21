const express = require('express');
const drive = require('./drive');
const app = express();
const port = 3000;
app.use(express.static('frontend'));

app.get('/api/drive', (req, res) => {
    const myFilesPromise = drive.list()
    myFilesPromise.then((myFiles) => {
        console.log(myFiles)
        res.send(myFiles)
    })
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
})

//module.exports = app;