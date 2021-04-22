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

app.post('/api/drive',(req,res)=>{
    console.log("Ok",req.query)
    const myDirectory = drive.create(req.query.name)
    myDirectory.then((myFolder)=>{
        console.log(myFolder)
        res.end(myFolder)
    })
})

app.delete('/api/drive/:name',(req,res)=> {
    const deleteDiretory= drive.delete(req.params.name)
    deleteDiretory.then((myFolder)=>{
        res.send(myFolder)
    })
})