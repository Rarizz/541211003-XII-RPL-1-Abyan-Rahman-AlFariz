const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send('Got All Users!')
  })

  app.post('/user', (req, res) => {
    res.send('Got a Post request')
  })

  app.put('/user/;id')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})