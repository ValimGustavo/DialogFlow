﻿export interface WebHookEvent {
    followupEventInput: {
      name: String,
      languageCode: String,
      parameters: {
        'param-name':String
      }
    }
}