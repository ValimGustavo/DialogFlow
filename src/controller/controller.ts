﻿import { EsporteService } from "../services/esporte.service";
import { WebHookRequest } from "../interfaces/webHook-request";

export function Controller(webHookRequest: WebHookRequest) {
  console.log(webHookRequest)
  switch (webHookRequest.queryResult.intent.displayName) {
    case "Esportes": {
      console.log('esporte')
      return EsporteService(webHookRequest);
    }
  }
}
