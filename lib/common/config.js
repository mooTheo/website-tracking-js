"use strict";
exports.__esModule = true;
var apiUrl = "https://t.stat-track.com";
if (process.env.API_URL) {
    apiUrl = process.env.API_URL;
}
exports["default"] = {
    apiUrl: apiUrl
};
