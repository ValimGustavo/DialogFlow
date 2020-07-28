﻿import { WebHookRequest } from "./interfaces/webHook-request";
import { WebHookTextResponse } from "./interfaces/webHook-text-response";
import { call } from "./controller/controller";
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

  const response = webHookRequest;

  console.log('response -->', response.queryResult)
  console.dir('response --->', response)

  res.json(response);
});

app.listen(PORT, () => {
  console.log("Server running PORT: ", PORT);
});
