﻿export interface WebHookRequest {
    responseId:String,
    session:String,
    queryResult: {
      queryText:String,
      parameters: {
        'param-name':String
      },
      allRequiredParamsPresent:Boolean,
      fulfillmentText:String,
      fulfillmentMessages: [
        {
          text: {
            text: String[]
          }
        }
      ],
      outputContexts: [
        {
          name:String
          lifespanCount: 5,
          parameters: {
            'no-input': Number, 
            'no-match': Number, 
            intent: string[], 
            'intent.original': string[] 
          }
        }
      ],
      intent: {
        name:String,
        displayName:String
      },
      intentDetectionConfidence: Number,
      diagnosticInfo: {},
      languageCode:String
    },
    originalDetectIntentRequest: {}
  }