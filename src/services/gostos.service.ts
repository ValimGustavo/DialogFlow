﻿import {
    WebHookTextResponse,
    IWebHookTextResponse,
  } from "../interfaces/webHook-text-response";
  import { WebHookRequest } from "../interfaces/webHook-request";
  import { api_youtube } from "../../database/mock/youtube.api";
  import { constructorURL, getVideoId } from "../utils/extractUrl.util";
  import { url_video, url_search_video } from "../utils/url.util";
  import { requestVideosApi } from "../utils/youtube.api";
  import { log } from "../utils/log";
  
  export async function GostosService(webHookRequest: WebHookRequest) {
    let webHookTextResponse = new WebHookTextResponse();
  
    const intent = webHookRequest.queryResult.intent.displayName.toLocaleLowerCase();
  
    log('outputContexts: ',webHookRequest.queryResult.outputContexts[0])
    log('intent: ',  webHookRequest.queryResult.outputContexts[0].parameters[
    `${intent}.original`
    ][0] )
    let searchFor =
      webHookRequest.queryResult.outputContexts[0].parameters[
        `${intent}.original`
      ][0];
  
    try {
      let url_complete = url_search_video + searchFor;
    //   const resp = await requestVideosApi(url_complete) 
  
    //   const listUrl = getVideoId(resp.items);
  
    //   const url_format = constructorURL(url_video, listUrl);
  
      log('url_complete', url_complete)
    //   log('resp.items', resp.items)
    //   log('listUrl', listUrl)
    //   log('url_format', url_format)
  
      webHookTextResponse.fulfillmentMessages = [
        {
          text: {
            text: ['ESSA EH A INTENSAO Gostos']//url_format,
          },
        },
      ];
  
    } catch (error) {
      webHookTextResponse.fulfillmentMessages = [
        {
          text: {
            text: ['Isso parece ser muito legal'],
          },
        },
      ];    
    }
  
    return webHookTextResponse;
  }
  