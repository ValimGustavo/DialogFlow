﻿interface webHookContext {
    fulfillmentMessages: [
      {
        text: {
          text: String[]
        }
      }
    ],
    outputContexts: [
      {
        name: String,
        lifespanCount: Number,
        parameters: {
          'param-name': String
        }
      }
    ]
}