﻿export interface  IWebHookTextResponse {
    fulfillmentMessages: [
      {
        text: {
          text: string[]
        }
      }
    ]
}

export class  WebHookTextResponse {
  
  fulfillmentMessages: [
    {
      text: {
        text: string[]
      }
    }
  ]
}