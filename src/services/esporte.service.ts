﻿import { WebHookRequest } from "../interfaces/webHook-request";
import { WebHookTextResponse } from "../interfaces/webHook-text-response";

export function EsporteService(): WebHookTextResponse {
  let webHookResponse: WebHookTextResponse;
  webHookResponse.fulfillmentMessages[0].text.text = ["uma url qualquer"];

  return webHookResponse;
}
