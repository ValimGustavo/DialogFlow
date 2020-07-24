﻿import { WebHookRequest } from "./interfaces/webHook-request"
import { WebHookTextResponse } from "./interfaces/webHook-text-response"
const fetch = require('node-fetch');

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const PORT = process.env.PORT || 3000

app.post("/", (req, res) => {

    // let webHookRequest:WebHookRequest = req.body
    // let obj:WebHookTextResponse

    // let SEARCH_URL = 'https://www.youtube.com/watch?v=';
    // let SEARCH_ID = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCrtkWROvn-lVFZqLd397jlXayrz6hWhjs&part=id&q='
    // let search = 'carros'

    // fetch(SEARCH_ID+search).then( response => {
    //     console.log(response)
    //    res.json(response)
    // })
    const intent = req.body.queryResult.intent.displayName;
    let obj:WebHookTextResponse;
    if( intent == 'Esporte'){
        console.log('INTENT'+ intent)
        obj = {
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
        console.log("INTENT"+ intent)
         obj = {
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
