﻿export interface webHookSession {
  fulfillmentMessages: [
    {
      text: {
        text: String[];
      };
    }
  ];
  sessionEntityTypes: [
    {
      name: String;
      entities: [
        {
          value: String;
          synonyms: String[];
        }
      ];
      entityOverrideMode: String;
    }
  ];
}
