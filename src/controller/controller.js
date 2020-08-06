"use strict";
exports.__esModule = true;
exports.Controller = void 0;
var esporte_service_1 = require("../services/esporte.service");
function Controller(webHookRequest) {
    console.log(webHookRequest);
    switch (webHookRequest.queryResult.intent.displayName) {
        case "Esportes": {
            console.log('esporte');
            return esporte_service_1.EsporteService(webHookRequest);
        }
    }
}
exports.Controller = Controller;
