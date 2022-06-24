const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
    res.send('hello world')
})

app.get('/form', (req, res) => {
    res.send('<form>pole 1 <input type="text" name="pole1"><br>pole 2 <input type="text" name="pole2"><br>pole 3 <input type="text" name="pole3"><br></form>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})