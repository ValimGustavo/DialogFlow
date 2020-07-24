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

app.post("/", (req, res) => {
    console.log(req.body.queryResult);
    const intent = req.body.queryResult.intent.displayName;
    let obj:webHookTextResponse;
    if( intent == 'Esporte'){
        console.log("esporte")
        const obj = {
            fulfillmentMessages:[
                {
                    text:{
                        text:[
                            "Resposta para Intent ESPORT:" + intent
                        ]
                    }
                }
            ]
        }
    }else{
        console.log("INTENT")
        const obj = {
            fulfillmentMessages:[
                {
                    text:{
                        text:[
                            "Resposta para Intent" + intent
                        ]
                    }
                }
            ]
        }
    }
    
    res.json(obj)
})
app.listen(PORT, ()=>{
    console.log("Server running PORT: ", PORT)
})
