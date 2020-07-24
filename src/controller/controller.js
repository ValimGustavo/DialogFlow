"use strict";
exports.__esModule = true;
exports.call = void 0;
var esporte_service_1 = require("../services/esporte.service");
function call(intent) {
    switch (intent) {
        case 'Esporte': {
            return esporte_service_1.intentEsporte();
        }
    }
}
exports.call = call;
