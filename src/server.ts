﻿import { WebHookRequest } from "./interfaces/webHook-request";
import { WebHookTextResponse } from "./interfaces/webHook-text-response";
import { Controller } from "./controller/controller";
import { isConstructorDeclaration } from "typescript";
const fetch = require("node-fetch");
const request = require("request");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.post("/", (req, res) => {
  const webHookRequest: WebHookRequest = req.body;

  console.log('fulfillment =--->', webHookRequest.queryResult.fulfillmentMessages)
  console.log('out =--->', webHookRequest.queryResult.outputContexts[0].parameters)

  


  const response = Controller(webHookRequest);

  res.json(response);
});

app.listen(PORT, () => {
  console.log("Server running PORT: ", PORT);
});
