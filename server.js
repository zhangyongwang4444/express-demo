const express = require('express')
const app = express()
const port = 8888
const path = require('path')

app.get('/', (req, res) => {
    let p = path.join(__dirname, './index.html')
    res.sendFile(p)
})
app.get('/frank', (req, res) =>
    res.send('hi!')
)
app.get('/jack', (req, res) =>
    res.send('wave!')
)



app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))