﻿interface webHookCardResponse {
    fulfillmentMessages: [
      {
        card: {
          title: String,
          subtitle: String,
          imageUri: String,
          buttons: [
            {
              text: String,
              postback: String
            }
          ]
        }
      }
    ]
}