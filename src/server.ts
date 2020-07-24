﻿const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const PORT = process.env.PORT || 3000


app.get("/", (req, res) => {
    res.send({"fulfillmentMessages":"ESTA RODANDO NO HEROKU"})
})
app.listen(PORT, ()=>{
    console.log("Server running PORT: ", PORT)
})
