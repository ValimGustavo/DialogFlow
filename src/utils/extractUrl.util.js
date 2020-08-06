"use strict";
exports.__esModule = true;
exports.constructorURL = exports.getVideoId = void 0;
function getVideoId(items) {
    var listId = [];
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        listId.push(item.id.videoId);
    }
    return listId;
}
exports.getVideoId = getVideoId;
function constructorURL(url, listVideoId) {
    var listUrl = [];
    for (var _i = 0, listVideoId_1 = listVideoId; _i < listVideoId_1.length; _i++) {
        var videoId = listVideoId_1[_i];
        listUrl.push(url + videoId);
    }
    return listUrl;
}
exports.constructorURL = constructorURL;
