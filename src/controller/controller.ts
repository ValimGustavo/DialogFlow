﻿﻿import { EsporteService } from "../services/esporte.service";
import { GostosService } from "../services/gostos.service";
import { WebHookRequest } from "../interfaces/webHook-request";

export async function Controller(webHookRequest: WebHookRequest) {
  console.log(webHookRequest)
  switch (webHookRequest.queryResult.intent.displayName) {
    case "Esportes": {
      console.log('esporte')
      return  await EsporteService(webHookRequest);
    }

    case "Gostos":{
      console.log('gostos')
      return await GostosService(webHookRequest)
    }
  }
}
