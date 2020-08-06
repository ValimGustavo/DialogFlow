﻿import {
  WebHookTextResponse,
  IWebHookTextResponse,
} from "../interfaces/webHook-text-response";
import { WebHookRequest } from "../interfaces/webHook-request";
import { api_youtube } from "../../database/mock/youtube.api";
import { constructorURL, getVideoId } from "../utils/extractUrl.util";
import { url_video, url_search_video } from "../utils/url.util";
const request = require("request");

export function EsporteService(webHookRequest: WebHookRequest) {
  let webHookTextResponse = new WebHookTextResponse();

  const intent = webHookRequest.queryResult.intent.displayName.toLocaleLowerCase();

  //   console.log('1',webHookRequest.queryResult.outputContexts[0])

  //   console.log('2',webHookRequest.queryResult.outputContexts[0].parameters)
  // console.log('sads', `${intent}.original`);

  //console.log('1',webHookRequest.queryResult.outputContexts[0].parameters[`${intent}.original`][0])
  let searchFor =
    webHookRequest.queryResult.outputContexts[0].parameters[
      `${intent}.original`
    ][0];
  //chamada da api do google

  let url_complete = url_search_video + searchFor;

  //   request(url_complete, function (error, response, body) {
  //     console.error('error:', error); // Print the error if one occurred
  //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //     console.log('body:', body); // Print the HTML for the Google homepage.
  //     const resp = body
  //   // console.log('response', response)
  //   console.log('a', resp.items)
  //   const listUrl = getVideoId(resp.items)
  //   // console.log('listUrl', listUrl);

  //   const url_format = constructorURL(url_video, listUrl)

  //   // console.log('url_forma', url_format);

  //   webHookTextResponse.fulfillmentMessages = [
  //     {
  //       text: {
  //         text: url_format
  //       }
  //     }
  //   ]

  //   return webHookTextResponse;

  // });

  const resp = api_youtube;
  // console.log('response', response)
  console.log("a", resp.items);
  const listUrl = getVideoId(resp.items);
  // console.log('listUrl', listUrl);

  const url_format = constructorURL(url_video, listUrl);

  // console.log('url_forma', url_format);

  webHookTextResponse.fulfillmentMessages = [
    {
      text: {
        text: url_format,
      },
    },
  ];



  return webHookTextResponse;
}
