const express = require('express');
const axios = require('axios');
const cors = require("cors");

const app = express()
const port = 4000

app.use(cors())

app.get('/dog/random', async (req, res) => {
  let dogResponse = await axios.get("https://dog.ceo/api/breeds/image/random")
  res.send(dogResponse.data.message)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})