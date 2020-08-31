const express = require('express')
const app = express()
app.listen(3000, () => {
    console.log('server started')
})
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root:__dirname})
})
app.get('/community', (req, res) => {
    res.sendFile('./views/community.html', {root:__dirname})
})
app.get('/pricing', (req, res) => {
    res.sendFile('./views/pricing.html', {root:__dirname})
})
app.get('/solutions', (req, res) => {
    res.sendFile('./views/solutions.html', {root:__dirname})
})
app.get('/why', (req, res) => {
    res.sendFile('./views/why.html', {root:__dirname})
})
app.use((req, res) => {
    res.status(404)
    res.sendFile('./views/404.html', {root:__dirname})
})
