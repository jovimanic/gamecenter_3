/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vendor/hash-base"],{

/***/ "./node_modules/hash-base/index.js":
/*!*****************************************!*\
  !*** ./node_modules/hash-base/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar Buffer = __webpack_require__(/*! safe-buffer */ \"./node_modules/safe-buffer/index.js\").Buffer\nvar Transform = __webpack_require__(/*! readable-stream */ \"./node_modules/readable-stream/readable-browser.js\").Transform\nvar inherits = __webpack_require__(/*! inherits */ \"./node_modules/inherits/inherits_browser.js\")\n\nfunction throwIfNotStringOrBuffer (val, prefix) {\n  if (!Buffer.isBuffer(val) && typeof val !== 'string') {\n    throw new TypeError(prefix + ' must be a string or a buffer')\n  }\n}\n\nfunction HashBase (blockSize) {\n  Transform.call(this)\n\n  this._block = Buffer.allocUnsafe(blockSize)\n  this._blockSize = blockSize\n  this._blockOffset = 0\n  this._length = [0, 0, 0, 0]\n\n  this._finalized = false\n}\n\ninherits(HashBase, Transform)\n\nHashBase.prototype._transform = function (chunk, encoding, callback) {\n  var error = null\n  try {\n    this.update(chunk, encoding)\n  } catch (err) {\n    error = err\n  }\n\n  callback(error)\n}\n\nHashBase.prototype._flush = function (callback) {\n  var error = null\n  try {\n    this.push(this.digest())\n  } catch (err) {\n    error = err\n  }\n\n  callback(error)\n}\n\nHashBase.prototype.update = function (data, encoding) {\n  throwIfNotStringOrBuffer(data, 'Data')\n  if (this._finalized) throw new Error('Digest already called')\n  if (!Buffer.isBuffer(data)) data = Buffer.from(data, encoding)\n\n  // consume data\n  var block = this._block\n  var offset = 0\n  while (this._blockOffset + data.length - offset >= this._blockSize) {\n    for (var i = this._blockOffset; i < this._blockSize;) block[i++] = data[offset++]\n    this._update()\n    this._blockOffset = 0\n  }\n  while (offset < data.length) block[this._blockOffset++] = data[offset++]\n\n  // update length\n  for (var j = 0, carry = data.length * 8; carry > 0; ++j) {\n    this._length[j] += carry\n    carry = (this._length[j] / 0x0100000000) | 0\n    if (carry > 0) this._length[j] -= 0x0100000000 * carry\n  }\n\n  return this\n}\n\nHashBase.prototype._update = function () {\n  throw new Error('_update is not implemented')\n}\n\nHashBase.prototype.digest = function (encoding) {\n  if (this._finalized) throw new Error('Digest already called')\n  this._finalized = true\n\n  var digest = this._digest()\n  if (encoding !== undefined) digest = digest.toString(encoding)\n\n  // reset state\n  this._block.fill(0)\n  this._blockOffset = 0\n  for (var i = 0; i < 4; ++i) this._length[i] = 0\n\n  return digest\n}\n\nHashBase.prototype._digest = function () {\n  throw new Error('_digest is not implemented')\n}\n\nmodule.exports = HashBase\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzaC1iYXNlL2luZGV4LmpzPzkzZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVk7QUFDWixhQUFhLG9GQUE2QjtBQUMxQyxnQkFBZ0IsMEdBQW9DO0FBQ3BELGVBQWUsbUJBQU8sQ0FBQyw2REFBVTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxxQkFBcUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsV0FBVztBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTzs7QUFFeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGFzaC1iYXNlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXJcbnZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCdyZWFkYWJsZS1zdHJlYW0nKS5UcmFuc2Zvcm1cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcblxuZnVuY3Rpb24gdGhyb3dJZk5vdFN0cmluZ09yQnVmZmVyICh2YWwsIHByZWZpeCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih2YWwpICYmIHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihwcmVmaXggKyAnIG11c3QgYmUgYSBzdHJpbmcgb3IgYSBidWZmZXInKVxuICB9XG59XG5cbmZ1bmN0aW9uIEhhc2hCYXNlIChibG9ja1NpemUpIHtcbiAgVHJhbnNmb3JtLmNhbGwodGhpcylcblxuICB0aGlzLl9ibG9jayA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShibG9ja1NpemUpXG4gIHRoaXMuX2Jsb2NrU2l6ZSA9IGJsb2NrU2l6ZVxuICB0aGlzLl9ibG9ja09mZnNldCA9IDBcbiAgdGhpcy5fbGVuZ3RoID0gWzAsIDAsIDAsIDBdXG5cbiAgdGhpcy5fZmluYWxpemVkID0gZmFsc2Vcbn1cblxuaW5oZXJpdHMoSGFzaEJhc2UsIFRyYW5zZm9ybSlcblxuSGFzaEJhc2UucHJvdG90eXBlLl90cmFuc2Zvcm0gPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICB2YXIgZXJyb3IgPSBudWxsXG4gIHRyeSB7XG4gICAgdGhpcy51cGRhdGUoY2h1bmssIGVuY29kaW5nKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBlcnJvciA9IGVyclxuICB9XG5cbiAgY2FsbGJhY2soZXJyb3IpXG59XG5cbkhhc2hCYXNlLnByb3RvdHlwZS5fZmx1c2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdmFyIGVycm9yID0gbnVsbFxuICB0cnkge1xuICAgIHRoaXMucHVzaCh0aGlzLmRpZ2VzdCgpKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBlcnJvciA9IGVyclxuICB9XG5cbiAgY2FsbGJhY2soZXJyb3IpXG59XG5cbkhhc2hCYXNlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSwgZW5jb2RpbmcpIHtcbiAgdGhyb3dJZk5vdFN0cmluZ09yQnVmZmVyKGRhdGEsICdEYXRhJylcbiAgaWYgKHRoaXMuX2ZpbmFsaXplZCkgdGhyb3cgbmV3IEVycm9yKCdEaWdlc3QgYWxyZWFkeSBjYWxsZWQnKVxuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihkYXRhKSkgZGF0YSA9IEJ1ZmZlci5mcm9tKGRhdGEsIGVuY29kaW5nKVxuXG4gIC8vIGNvbnN1bWUgZGF0YVxuICB2YXIgYmxvY2sgPSB0aGlzLl9ibG9ja1xuICB2YXIgb2Zmc2V0ID0gMFxuICB3aGlsZSAodGhpcy5fYmxvY2tPZmZzZXQgKyBkYXRhLmxlbmd0aCAtIG9mZnNldCA+PSB0aGlzLl9ibG9ja1NpemUpIHtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5fYmxvY2tPZmZzZXQ7IGkgPCB0aGlzLl9ibG9ja1NpemU7KSBibG9ja1tpKytdID0gZGF0YVtvZmZzZXQrK11cbiAgICB0aGlzLl91cGRhdGUoKVxuICAgIHRoaXMuX2Jsb2NrT2Zmc2V0ID0gMFxuICB9XG4gIHdoaWxlIChvZmZzZXQgPCBkYXRhLmxlbmd0aCkgYmxvY2tbdGhpcy5fYmxvY2tPZmZzZXQrK10gPSBkYXRhW29mZnNldCsrXVxuXG4gIC8vIHVwZGF0ZSBsZW5ndGhcbiAgZm9yICh2YXIgaiA9IDAsIGNhcnJ5ID0gZGF0YS5sZW5ndGggKiA4OyBjYXJyeSA+IDA7ICsraikge1xuICAgIHRoaXMuX2xlbmd0aFtqXSArPSBjYXJyeVxuICAgIGNhcnJ5ID0gKHRoaXMuX2xlbmd0aFtqXSAvIDB4MDEwMDAwMDAwMCkgfCAwXG4gICAgaWYgKGNhcnJ5ID4gMCkgdGhpcy5fbGVuZ3RoW2pdIC09IDB4MDEwMDAwMDAwMCAqIGNhcnJ5XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG5IYXNoQmFzZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdfdXBkYXRlIGlzIG5vdCBpbXBsZW1lbnRlZCcpXG59XG5cbkhhc2hCYXNlLnByb3RvdHlwZS5kaWdlc3QgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgaWYgKHRoaXMuX2ZpbmFsaXplZCkgdGhyb3cgbmV3IEVycm9yKCdEaWdlc3QgYWxyZWFkeSBjYWxsZWQnKVxuICB0aGlzLl9maW5hbGl6ZWQgPSB0cnVlXG5cbiAgdmFyIGRpZ2VzdCA9IHRoaXMuX2RpZ2VzdCgpXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSBkaWdlc3QgPSBkaWdlc3QudG9TdHJpbmcoZW5jb2RpbmcpXG5cbiAgLy8gcmVzZXQgc3RhdGVcbiAgdGhpcy5fYmxvY2suZmlsbCgwKVxuICB0aGlzLl9ibG9ja09mZnNldCA9IDBcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyArK2kpIHRoaXMuX2xlbmd0aFtpXSA9IDBcblxuICByZXR1cm4gZGlnZXN0XG59XG5cbkhhc2hCYXNlLnByb3RvdHlwZS5fZGlnZXN0ID0gZnVuY3Rpb24gKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ19kaWdlc3QgaXMgbm90IGltcGxlbWVudGVkJylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoQmFzZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/hash-base/index.js\n");

/***/ })

}]);