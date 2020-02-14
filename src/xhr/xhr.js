"use strict";
exports.__esModule = true;
function xhr(config) {
    var url = config.url, _a = config.method, method = _a === void 0 ? 'get' : _a, _b = config.data, data = _b === void 0 ? null : _b;
    var req = new XMLHttpRequest();
    req.open(method.toUpperCase(), url, true);
    req.send(data);
}
exports["default"] = xhr;
