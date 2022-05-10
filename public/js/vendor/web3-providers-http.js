/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vendor/web3-providers-http"],{

/***/ "./node_modules/web3-providers-http/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/web3-providers-http/lib/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n    This file is part of web3.js.\n\n    web3.js is free software: you can redistribute it and/or modify\n    it under the terms of the GNU Lesser General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    web3.js is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU Lesser General Public License for more details.\n\n    You should have received a copy of the GNU Lesser General Public License\n    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.\n*/\n/** @file httpprovider.js\n * @authors:\n *   Marek Kotewicz <marek@parity.io>\n *   Marian Oancea\n *   Fabian Vogelsteller <fabian@ethereum.org>\n * @date 2015\n */\nvar errors = __webpack_require__(/*! web3-core-helpers */ \"./node_modules/web3-core-helpers/lib/index.js\").errors;\nvar XHR2 = __webpack_require__(/*! xhr2-cookies */ \"./node_modules/xhr2-cookies/dist/index.js\").XMLHttpRequest; // jshint ignore: line\nvar http = __webpack_require__(/*! http */ \"./node_modules/stream-http/index.js\");\nvar https = __webpack_require__(/*! https */ \"./node_modules/https-browserify/index.js\");\n/**\n * HttpProvider should be used to send rpc calls over http\n */\nvar HttpProvider = function HttpProvider(host, options) {\n    options = options || {};\n    this.withCredentials = options.withCredentials || false;\n    this.timeout = options.timeout || 0;\n    this.headers = options.headers;\n    this.agent = options.agent;\n    this.connected = false;\n    // keepAlive is true unless explicitly set to false\n    const keepAlive = options.keepAlive !== false;\n    this.host = host || 'http://localhost:8545';\n    if (!this.agent) {\n        if (this.host.substring(0, 5) === \"https\") {\n            this.httpsAgent = new https.Agent({ keepAlive });\n        }\n        else {\n            this.httpAgent = new http.Agent({ keepAlive });\n        }\n    }\n};\nHttpProvider.prototype._prepareRequest = function () {\n    var request;\n    // the current runtime is a browser\n    if (typeof XMLHttpRequest !== 'undefined') {\n        request = new XMLHttpRequest();\n    }\n    else {\n        request = new XHR2();\n        var agents = { httpsAgent: this.httpsAgent, httpAgent: this.httpAgent, baseUrl: this.baseUrl };\n        if (this.agent) {\n            agents.httpsAgent = this.agent.https;\n            agents.httpAgent = this.agent.http;\n            agents.baseUrl = this.agent.baseUrl;\n        }\n        request.nodejsSet(agents);\n    }\n    request.open('POST', this.host, true);\n    request.setRequestHeader('Content-Type', 'application/json');\n    request.timeout = this.timeout;\n    request.withCredentials = this.withCredentials;\n    if (this.headers) {\n        this.headers.forEach(function (header) {\n            request.setRequestHeader(header.name, header.value);\n        });\n    }\n    return request;\n};\n/**\n * Should be used to make async request\n *\n * @method send\n * @param {Object} payload\n * @param {Function} callback triggered on end with (err, result)\n */\nHttpProvider.prototype.send = function (payload, callback) {\n    var _this = this;\n    var request = this._prepareRequest();\n    request.onreadystatechange = function () {\n        if (request.readyState === 4 && request.timeout !== 1) {\n            var result = request.responseText;\n            var error = null;\n            try {\n                result = JSON.parse(result);\n            }\n            catch (e) {\n                error = errors.InvalidResponse(request.responseText);\n            }\n            _this.connected = true;\n            callback(error, result);\n        }\n    };\n    request.ontimeout = function () {\n        _this.connected = false;\n        callback(errors.ConnectionTimeout(this.timeout));\n    };\n    try {\n        request.send(JSON.stringify(payload));\n    }\n    catch (error) {\n        this.connected = false;\n        callback(errors.InvalidConnection(this.host));\n    }\n};\nHttpProvider.prototype.disconnect = function () {\n    //NO OP\n};\n/**\n * Returns the desired boolean.\n *\n * @method supportsSubscriptions\n * @returns {boolean}\n */\nHttpProvider.prototype.supportsSubscriptions = function () {\n    return false;\n};\nmodule.exports = HttpProvider;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViMy1wcm92aWRlcnMtaHR0cC9saWIvaW5kZXguanM/NjRlNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9HQUFtQztBQUNoRCxXQUFXLG1HQUFzQyxDQUFDO0FBQ2xELFdBQVcsbUJBQU8sQ0FBQyxpREFBTTtBQUN6QixZQUFZLG1CQUFPLENBQUMsdURBQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQTtBQUNBLDZDQUE2QyxZQUFZO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy93ZWIzLXByb3ZpZGVycy1odHRwL2xpYi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgVGhpcyBmaWxlIGlzIHBhcnQgb2Ygd2ViMy5qcy5cblxuICAgIHdlYjMuanMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICAgIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICAgIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gICAgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICAgIHdlYjMuanMgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAgICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICAgIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAgICBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cblxuICAgIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICAgIGFsb25nIHdpdGggd2ViMy5qcy4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiovXG4vKiogQGZpbGUgaHR0cHByb3ZpZGVyLmpzXG4gKiBAYXV0aG9yczpcbiAqICAgTWFyZWsgS290ZXdpY3ogPG1hcmVrQHBhcml0eS5pbz5cbiAqICAgTWFyaWFuIE9hbmNlYVxuICogICBGYWJpYW4gVm9nZWxzdGVsbGVyIDxmYWJpYW5AZXRoZXJldW0ub3JnPlxuICogQGRhdGUgMjAxNVxuICovXG52YXIgZXJyb3JzID0gcmVxdWlyZSgnd2ViMy1jb3JlLWhlbHBlcnMnKS5lcnJvcnM7XG52YXIgWEhSMiA9IHJlcXVpcmUoJ3hocjItY29va2llcycpLlhNTEh0dHBSZXF1ZXN0OyAvLyBqc2hpbnQgaWdub3JlOiBsaW5lXG52YXIgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbnZhciBodHRwcyA9IHJlcXVpcmUoJ2h0dHBzJyk7XG4vKipcbiAqIEh0dHBQcm92aWRlciBzaG91bGQgYmUgdXNlZCB0byBzZW5kIHJwYyBjYWxscyBvdmVyIGh0dHBcbiAqL1xudmFyIEh0dHBQcm92aWRlciA9IGZ1bmN0aW9uIEh0dHBQcm92aWRlcihob3N0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zLndpdGhDcmVkZW50aWFscyB8fCBmYWxzZTtcbiAgICB0aGlzLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgMDtcbiAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG4gICAgdGhpcy5hZ2VudCA9IG9wdGlvbnMuYWdlbnQ7XG4gICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAvLyBrZWVwQWxpdmUgaXMgdHJ1ZSB1bmxlc3MgZXhwbGljaXRseSBzZXQgdG8gZmFsc2VcbiAgICBjb25zdCBrZWVwQWxpdmUgPSBvcHRpb25zLmtlZXBBbGl2ZSAhPT0gZmFsc2U7XG4gICAgdGhpcy5ob3N0ID0gaG9zdCB8fCAnaHR0cDovL2xvY2FsaG9zdDo4NTQ1JztcbiAgICBpZiAoIXRoaXMuYWdlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaG9zdC5zdWJzdHJpbmcoMCwgNSkgPT09IFwiaHR0cHNcIikge1xuICAgICAgICAgICAgdGhpcy5odHRwc0FnZW50ID0gbmV3IGh0dHBzLkFnZW50KHsga2VlcEFsaXZlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5odHRwQWdlbnQgPSBuZXcgaHR0cC5BZ2VudCh7IGtlZXBBbGl2ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5IdHRwUHJvdmlkZXIucHJvdG90eXBlLl9wcmVwYXJlUmVxdWVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVxdWVzdDtcbiAgICAvLyB0aGUgY3VycmVudCBydW50aW1lIGlzIGEgYnJvd3NlclxuICAgIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlcXVlc3QgPSBuZXcgWEhSMigpO1xuICAgICAgICB2YXIgYWdlbnRzID0geyBodHRwc0FnZW50OiB0aGlzLmh0dHBzQWdlbnQsIGh0dHBBZ2VudDogdGhpcy5odHRwQWdlbnQsIGJhc2VVcmw6IHRoaXMuYmFzZVVybCB9O1xuICAgICAgICBpZiAodGhpcy5hZ2VudCkge1xuICAgICAgICAgICAgYWdlbnRzLmh0dHBzQWdlbnQgPSB0aGlzLmFnZW50Lmh0dHBzO1xuICAgICAgICAgICAgYWdlbnRzLmh0dHBBZ2VudCA9IHRoaXMuYWdlbnQuaHR0cDtcbiAgICAgICAgICAgIGFnZW50cy5iYXNlVXJsID0gdGhpcy5hZ2VudC5iYXNlVXJsO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3Qubm9kZWpzU2V0KGFnZW50cyk7XG4gICAgfVxuICAgIHJlcXVlc3Qub3BlbignUE9TVCcsIHRoaXMuaG9zdCwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHJlcXVlc3QudGltZW91dCA9IHRoaXMudGltZW91dDtcbiAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRoaXMud2l0aENyZWRlbnRpYWxzO1xuICAgIGlmICh0aGlzLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGhlYWRlcikge1xuICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlci5uYW1lLCBoZWFkZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG59O1xuLyoqXG4gKiBTaG91bGQgYmUgdXNlZCB0byBtYWtlIGFzeW5jIHJlcXVlc3RcbiAqXG4gKiBAbWV0aG9kIHNlbmRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayB0cmlnZ2VyZWQgb24gZW5kIHdpdGggKGVyciwgcmVzdWx0KVxuICovXG5IdHRwUHJvdmlkZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAocGF5bG9hZCwgY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciByZXF1ZXN0ID0gdGhpcy5fcHJlcGFyZVJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCAmJiByZXF1ZXN0LnRpbWVvdXQgIT09IDEpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXF1ZXN0LnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlcnJvcnMuSW52YWxpZFJlc3BvbnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmNvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICBjYWxsYmFjayhlcnJvcnMuQ29ubmVjdGlvblRpbWVvdXQodGhpcy50aW1lb3V0KSk7XG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgY2FsbGJhY2soZXJyb3JzLkludmFsaWRDb25uZWN0aW9uKHRoaXMuaG9zdCkpO1xuICAgIH1cbn07XG5IdHRwUHJvdmlkZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9OTyBPUFxufTtcbi8qKlxuICogUmV0dXJucyB0aGUgZGVzaXJlZCBib29sZWFuLlxuICpcbiAqIEBtZXRob2Qgc3VwcG9ydHNTdWJzY3JpcHRpb25zXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuSHR0cFByb3ZpZGVyLnByb3RvdHlwZS5zdXBwb3J0c1N1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbm1vZHVsZS5leHBvcnRzID0gSHR0cFByb3ZpZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/web3-providers-http/lib/index.js\n");

/***/ })

}]);