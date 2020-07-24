﻿const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const PORT = process.env.PORT || 3000


app.get("/", (req, res) => {
    console.log("entrou")
    res.send({"fulfillmentMessages":"ESTA RODANDO NO HEROKU"})
})
app.listen(PORT, ()=>{
    console.log("Server running PORT: ", PORT)
})
