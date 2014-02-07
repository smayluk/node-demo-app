var express = require('express')
  , app = express()
  , port = process.env.PORT || 8080

app.get('/', function (req, res) {
  res.send('Hello, World!')
})

app.listen(port, function () {
  console.log('Listening on port ', port)
})