const bodyParser = require('body-parser')
const app = require('express')()
const execa = require('execa')

app.use(bodyParser.json())
app.all('/getJSON', (req, res) => {
  res.json({ data: 'data' })
})

app.all('/testCmd', (req, res) => {

  const something = execa.commandSync('git --version')

  console.log(something)

  res.json({ data: 'data', something})
})

module.exports = app
