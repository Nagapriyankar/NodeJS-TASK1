const express = require('express')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises
const { format } = require('date-fns')

const app = express();
const PORT = process.env.PORT || 3500

//launch server

app.get('/', (req, res) => {
    res.send(`<h1>Node Js - File System Task</h1>`)
})


app.get('/create', (req, res) => {
    const fileName = `${format(new Date(), 'ddMMyyyy_HHmmss')}`
    const DateTime = `${format(new Date(), 'dd/MM/yyyy\tHH:mm:ss')}`
    console.log(DateTime)
    fs.writeFile(path.join(__dirname, 'output_files', fileName), DateTime, (err, data) => {
        if (err) console.log("Error:", err)
        else res.send(`New File has been created \n FILE NAME: ${fileName}`)
    })
})

app.get('/readFolder', (req, res) => {
    fs.readdir('output_files', (err, files) => {
        if (err) console.log("Error:", err)
        else {
            let fileList = []
            files.forEach(file => {
                fileList.push(file)
            });
            res.send(`Available Files: ${fileList.length},
                    File Names:  ${fileList.join(',')}`)
        }
    });
})

//listen to app

app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`)
})


/* https://www.postman.com/universal-moon-894436/workspace/nagapriyanka/collection/29490097-e88b949b-6134-4836-9a8d-6ff6e81c3e9f?action=share&creator=29490097 */