"use strict";
exports.__esModule = true;
exports.url_search_video = exports.url_video = void 0;
var dotenv = require("dotenv");
dotenv.config();
exports.url_video = 'https://www.youtube.com/watch?v=';
exports.url_search_video = "https://www.googleapis.com/youtube/v3/search?key=" + process.env.API + "&part=id&q=";
