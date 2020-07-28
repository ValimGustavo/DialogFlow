﻿import { EsporteService } from "../services/esporte.service";
import { WebHookRequest } from "../interfaces/webHook-request";

export function Controller(webHookRequest: WebHookRequest) {
  switch (webHookRequest.queryResult.intent.displayName) {
    case "Esporte": {
      return EsporteService();
    }
  }
}
