﻿import { webHookRequest } from "./interfaces/webHook-request"
import { webHookTextResponse } from "./interfaces/webHook-text-response"
import { text } from "express"

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const PORT = process.env.PORT || 3000

app.post("/", (req:webHookRequest, res) => {
    console.log(req);
    const obj:webHookTextResponse = {
        fulfillmentMessages:[
            {
                text:{
                    text:[
                        "Resposta vindo do servidor"
                    ]
                }
            }
        ]
    }
    res.json(obj)
})
app.listen(PORT, ()=>{
    console.log("Server running PORT: ", PORT)
})
