"use strict";
exports.__esModule = true;
exports.EsporteService = void 0;
var webHook_text_response_1 = require("../interfaces/webHook-text-response");
var youtube_api_1 = require("../../database/mock/youtube.api");
var extractUrl_util_1 = require("../utils/extractUrl.util");
var url_util_1 = require("../utils/url.util");
var request = require("request");
function EsporteService(webHookRequest) {
    var webHookTextResponse = new webHook_text_response_1.WebHookTextResponse();
    var intent = webHookRequest.queryResult.intent.displayName.toLocaleLowerCase();
    //   console.log('1',webHookRequest.queryResult.outputContexts[0])
    //   console.log('2',webHookRequest.queryResult.outputContexts[0].parameters)
    // console.log('sads', `${intent}.original`);
    //console.log('1',webHookRequest.queryResult.outputContexts[0].parameters[`${intent}.original`][0])
    var searchFor = webHookRequest.queryResult.outputContexts[0].parameters[intent + ".original"][0];
    //chamada da api do google
    var url_complete = url_util_1.url_search_video + searchFor;
    //   request(url_complete, function (error, response, body) {
    //     console.error('error:', error); // Print the error if one occurred
    //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //     console.log('body:', body); // Print the HTML for the Google homepage.
    //     const resp = body
    //   // console.log('response', response)
    //   console.log('a', resp.items)
    //   const listUrl = getVideoId(resp.items)
    //   // console.log('listUrl', listUrl);
    //   const url_format = constructorURL(url_video, listUrl)
    //   // console.log('url_forma', url_format);
    //   webHookTextResponse.fulfillmentMessages = [
    //     {
    //       text: {
    //         text: url_format
    //       }
    //     }
    //   ]
    //   return webHookTextResponse;
    // });
    var resp = youtube_api_1.api_youtube;
    // console.log('response', response)
    console.log("a", resp.items);
    var listUrl = extractUrl_util_1.getVideoId(resp.items);
    // console.log('listUrl', listUrl);
    var url_format = extractUrl_util_1.constructorURL(url_util_1.url_video, listUrl);
    // console.log('url_forma', url_format);
    webHookTextResponse.fulfillmentMessages = [
        {
            text: {
                text: url_format
            }
        },
    ];
    return webHookTextResponse;
}
exports.EsporteService = EsporteService;
