"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.EsporteService = void 0;
var webHook_text_response_1 = require("../interfaces/webHook-text-response");
var youtube_api_1 = require("../../database/mock/youtube.api");
var extractUrl_util_1 = require("../utils/extractUrl.util");
var url_util_1 = require("../utils/url.util");
var log_1 = require("../utils/log");
var request = require("request");
function EsporteService(webHookRequest) {
    return __awaiter(this, void 0, void 0, function () {
        var webHookTextResponse, intent, searchFor, url_complete, resp, listUrl, url_format;
        return __generator(this, function (_a) {
            webHookTextResponse = new webHook_text_response_1.WebHookTextResponse();
            intent = webHookRequest.queryResult.intent.displayName.toLocaleLowerCase();
            searchFor = webHookRequest.queryResult.outputContexts[0].parameters[intent + ".original"][0];
            url_complete = url_util_1.url_search_video + searchFor;
            resp = youtube_api_1.api_youtube //await requestVideosApi(url_complete)
            ;
            listUrl = extractUrl_util_1.getVideoId(resp.items);
            url_format = extractUrl_util_1.constructorURL(url_util_1.url_video, listUrl);
            log_1.log('resp.items', resp.items);
            log_1.log('listUrl', listUrl);
            log_1.log('url_format', url_format);
            webHookTextResponse.fulfillmentMessages = [
                {
                    text: {
                        text: url_format
                    }
                },
            ];
            return [2 /*return*/, webHookTextResponse];
        });
    });
}
exports.EsporteService = EsporteService;
