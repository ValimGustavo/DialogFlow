﻿const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000


app.get("/", (req, res) => {
    res.JSON({"fulfillmentMessages":"ESTA RODANDO NO HEROKU"})
})
app.listen(PORT, ()=>{
    console.log("Server running PORT: ", PORT)
})
