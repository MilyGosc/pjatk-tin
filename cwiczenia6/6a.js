const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/url', (req, res) => {
    res.send('Response from url!')
})

app.get('/otherUrl', (req, res) => {
    res.send('Response from other url!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})