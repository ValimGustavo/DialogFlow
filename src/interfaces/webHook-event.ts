﻿export interface webHookEvent {
    followupEventInput: {
      name: String,
      languageCode: String,
      parameters: {
        'param-name':String
      }
    }
}