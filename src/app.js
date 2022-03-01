const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send("I am the same living potato as before. Just dockerized.");
})

app.listen(1234, () => {
  console.log("Server is alive");
})
