/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/dotenv/lib/main.js":
/*!******************************************!*\
  !*** ../node_modules/dotenv/lib/main.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* @flow */\n/*::\n\ntype DotenvParseOptions = {\n  debug?: boolean\n}\n\n// keys and values from src\ntype DotenvParseOutput = { [string]: string }\n\ntype DotenvConfigOptions = {\n  path?: string, // path to .env file\n  encoding?: string, // encoding of .env file\n  debug?: string // turn on logging for debugging purposes\n}\n\ntype DotenvConfigOutput = {\n  parsed?: DotenvParseOutput,\n  error?: Error\n}\n\n*/\n\nconst fs = __webpack_require__(/*! fs */ \"fs\")\nconst path = __webpack_require__(/*! path */ \"path\")\nconst os = __webpack_require__(/*! os */ \"os\")\n\nfunction log (message /*: string */) {\n  console.log(`[dotenv][DEBUG] ${message}`)\n}\n\nconst NEWLINE = '\\n'\nconst RE_INI_KEY_VAL = /^\\s*([\\w.-]+)\\s*=\\s*(.*)?\\s*$/\nconst RE_NEWLINES = /\\\\n/g\nconst NEWLINES_MATCH = /\\r\\n|\\n|\\r/\n\n// Parses src into an Object\nfunction parse (src /*: string | Buffer */, options /*: ?DotenvParseOptions */) /*: DotenvParseOutput */ {\n  const debug = Boolean(options && options.debug)\n  const obj = {}\n\n  // convert Buffers before splitting into lines and processing\n  src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {\n    // matching \"KEY' and 'VAL' in 'KEY=VAL'\n    const keyValueArr = line.match(RE_INI_KEY_VAL)\n    // matched?\n    if (keyValueArr != null) {\n      const key = keyValueArr[1]\n      // default undefined or missing values to empty string\n      let val = (keyValueArr[2] || '')\n      const end = val.length - 1\n      const isDoubleQuoted = val[0] === '\"' && val[end] === '\"'\n      const isSingleQuoted = val[0] === \"'\" && val[end] === \"'\"\n\n      // if single or double quoted, remove quotes\n      if (isSingleQuoted || isDoubleQuoted) {\n        val = val.substring(1, end)\n\n        // if double quoted, expand newlines\n        if (isDoubleQuoted) {\n          val = val.replace(RE_NEWLINES, NEWLINE)\n        }\n      } else {\n        // remove surrounding whitespace\n        val = val.trim()\n      }\n\n      obj[key] = val\n    } else if (debug) {\n      log(`did not match key and value when parsing line ${idx + 1}: ${line}`)\n    }\n  })\n\n  return obj\n}\n\nfunction resolveHome (envPath) {\n  return envPath[0] === '~' ? path.join(os.homedir(), envPath.slice(1)) : envPath\n}\n\n// Populates process.env from .env file\nfunction config (options /*: ?DotenvConfigOptions */) /*: DotenvConfigOutput */ {\n  let dotenvPath = path.resolve(process.cwd(), '.env')\n  let encoding /*: string */ = 'utf8'\n  let debug = false\n\n  if (options) {\n    if (options.path != null) {\n      dotenvPath = resolveHome(options.path)\n    }\n    if (options.encoding != null) {\n      encoding = options.encoding\n    }\n    if (options.debug != null) {\n      debug = true\n    }\n  }\n\n  try {\n    // specifying an encoding returns a string instead of a buffer\n    const parsed = parse(fs.readFileSync(dotenvPath, { encoding }), { debug })\n\n    Object.keys(parsed).forEach(function (key) {\n      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {\n        process.env[key] = parsed[key]\n      } else if (debug) {\n        log(`\"${key}\" is already defined in \\`process.env\\` and will not be overwritten`)\n      }\n    })\n\n    return { parsed }\n  } catch (e) {\n    return { error: e }\n  }\n}\n\nmodule.exports.config = config\nmodule.exports.parse = parse\n\n\n//# sourceURL=webpack:///../node_modules/dotenv/lib/main.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-node/index.js":
/*!***************************************************!*\
  !*** ../node_modules/uuid/dist/esm-node/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"v1\": () => (/* reexport safe */ _v1_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"v3\": () => (/* reexport safe */ _v3_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"v4\": () => (/* reexport safe */ _v4_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"v5\": () => (/* reexport safe */ _v5_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"NIL\": () => (/* reexport safe */ _nil_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"version\": () => (/* reexport safe */ _version_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"validate\": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"stringify\": () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   \"parse\": () => (/* reexport safe */ _parse_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ \"../node_modules/uuid/dist/esm-node/v1.js\");\n/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ \"../node_modules/uuid/dist/esm-node/v3.js\");\n/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ \"../node_modules/uuid/dist/esm-node/v4.js\");\n/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ \"../node_modules/uuid/dist/esm-node/v5.js\");\n/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ \"../node_modules/uuid/dist/esm-node/nil.js\");\n/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ \"../node_modules/uuid/dist/esm-node/version.js\");\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ \"../node_modules/uuid/dist/esm-node/validate.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ \"../node_modules/uuid/dist/esm-node/stringify.js\");\n/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ \"../node_modules/uuid/dist/esm-node/parse.js\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///../node_modules/uuid/dist/esm-node/index.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-node/md5.js":
/*!*************************************************!*\
  !*** ../node_modules/uuid/dist/esm-node/md5.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction md5(bytes) {\n  if (Array.isArray(bytes)) {\n    bytes = Buffer.from(bytes);\n  } else if (typeof bytes === 'string') {\n    bytes = Buffer.from(bytes, 'utf8');\n  }\n\n  return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash('md5').update(bytes).digest();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (md5);\n\n//# sourceURL=webpack:///../node_modules/uuid/dist/esm-node/md5.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-node/nil.js":
/*!*************************************************!*\
  !*** ../node_modules/uuid/dist/esm-node/nil.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('00000000-0000-0000-0000-000000000000');\n\n//# sourceURL=webpack:///../node_modules/uuid/dist/esm-node/nil.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-node/parse.js":
/*!***************************************************!*\
  !*** ../node_modules/uuid/dist/esm-node/parse.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"../node_modules/uuid/dist/esm-node/validate.js\");\n\n\nfunction parse(uuid) {\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Invalid UUID');\n  }\n\n  let v;\n  const arr = new Uint8Array(16); // Parse ########-....-....-....-............\n\n  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;\n  arr[1] = v >>> 16 & 0xff;\n  arr[2] = v >>> 8 & 0xff;\n  arr[3] = v & 0xff; // Parse ........-####-....-....-............\n\n  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;\n  arr[5] = v & 0xff; // Parse ........-....-####-....-............\n\n  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;\n  arr[7] = v & 0xff; // Parse ........-....-....-####-............\n\n  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;\n  arr[9] = v & 0xff; // Parse ........-....-....-....-############\n  // (Use \"/\" to avoid 32-bit truncation when bit-shifting high-order bytes)\n\n  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;\n  arr[11] = v / 0x100000000 & 0xff;\n  arr[12] = v >>> 24 & 0xff;\n  arr[13] = v >>> 16 & 0xff;\n  arr[14] = v >>> 8 & 0xff;\n  arr[15] = v & 0xff;\n  return arr;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);\n\n//# sourceURL=webpack:///../node_modules/uuid/dist/esm-node/parse.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-node/regex.js":
/*!***************************************************!*\
  !*** ../node_modules/uuid/dist/esm-node/regex.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack:///../node_modules/uuid/dist/esm-node/regex.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-node/rng.js":
/*!*************************************************!*\
  !*** ../node_modules/uuid/dist/esm-node/rng.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\nconst rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate\n\nlet poolPtr = rnds8Pool.length;\nfunction rng() {\n  if (poolPtr > rnds8Pool.length - 16) {\n    crypto__WEBPACK_IMPORTED_MODULE_0___default().randomFillSync(rnds8Pool);\n    poolPtr = 0;\n  }\n\n  return rnds8Pool.slice(poolPtr, poolPtr += 16);\n}\n\n//# sourceURL=webpack:///../node_modules/uuid/dist/esm-node/rng.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-node/sha1.js":
/*!**************************************************!*\
  !*** ../node_modules/uuid/dist/esm-node/sha1.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction sha1(bytes) {\n  if (Array.isArray(bytes)) {\n    bytes = Buffer.from(bytes);\n  } else if (typeof bytes === 'string') {\n    bytes = Buffer.from(bytes, 'utf8');\n  }\n\n  return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash('sha1').update(bytes).digest();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sha1);\n\n//# sourceURL=webpack:///../node_modules/uuid/dist/esm-node/sha1.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-node/stringify.js":
/*!*******************************************************!*\
  !*** ../node_modules/uuid/dist/esm-node/stringify.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"../node_modules/uuid/dist/esm-node/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack:///../node_modules/uuid/dist/esm-node/stringify.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-node/v1.js":
/*!************************************************!*\
  !*** ../node_modules/uuid/dist/esm-node/v1.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"../node_modules/uuid/dist/esm-node/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"../node_modules/uuid/dist/esm-node/stringify.js\");\n\n // **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nlet _nodeId;\n\nlet _clockseq; // Previous uuid creation time\n\n\nlet _lastMSecs = 0;\nlet _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details\n\nfunction v1(options, buf, offset) {\n  let i = buf && offset || 0;\n  const b = buf || new Array(16);\n  options = options || {};\n  let node = options.node || _nodeId;\n  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n\n  if (node == null || clockseq == null) {\n    const seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];\n    }\n\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n\n\n  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n\n  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)\n\n  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression\n\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n\n\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  } // Per 4.2.1.2 Throw error if too many uuids are requested\n\n\n  if (nsecs >= 10000) {\n    throw new Error(\"uuid.v1(): Can't create more than 10M uuids/sec\");\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n\n  msecs += 12219292800000; // `time_low`\n\n  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff; // `time_mid`\n\n  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff; // `time_high_and_version`\n\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n\n  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n\n  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`\n\n  b[i++] = clockseq & 0xff; // `node`\n\n  for (let n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf || (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(b);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v1);\n\n//# sourceURL=webpack:///../node_modules/uuid/dist/esm-node/v1.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-node/v3.js":
/*!************************************************!*\
  !*** ../node_modules/uuid/dist/esm-node/v3.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ \"../node_modules/uuid/dist/esm-node/v35.js\");\n/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ \"../node_modules/uuid/dist/esm-node/md5.js\");\n\n\nconst v3 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v3);\n\n//# sourceURL=webpack:///../node_modules/uuid/dist/esm-node/v3.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-node/v35.js":
/*!*************************************************!*\
  !*** ../node_modules/uuid/dist/esm-node/v35.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DNS\": () => (/* binding */ DNS),\n/* harmony export */   \"URL\": () => (/* binding */ URL),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"../node_modules/uuid/dist/esm-node/stringify.js\");\n/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse.js */ \"../node_modules/uuid/dist/esm-node/parse.js\");\n\n\n\nfunction stringToBytes(str) {\n  str = unescape(encodeURIComponent(str)); // UTF8 escape\n\n  const bytes = [];\n\n  for (let i = 0; i < str.length; ++i) {\n    bytes.push(str.charCodeAt(i));\n  }\n\n  return bytes;\n}\n\nconst DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';\nconst URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, version, hashfunc) {\n  function generateUUID(value, namespace, buf, offset) {\n    if (typeof value === 'string') {\n      value = stringToBytes(value);\n    }\n\n    if (typeof namespace === 'string') {\n      namespace = (0,_parse_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(namespace);\n    }\n\n    if (namespace.length !== 16) {\n      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');\n    } // Compute hash of namespace and value, Per 4.3\n    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =\n    // hashfunc([...namespace, ... value])`\n\n\n    let bytes = new Uint8Array(16 + value.length);\n    bytes.set(namespace);\n    bytes.set(value, namespace.length);\n    bytes = hashfunc(bytes);\n    bytes[6] = bytes[6] & 0x0f | version;\n    bytes[8] = bytes[8] & 0x3f | 0x80;\n\n    if (buf) {\n      offset = offset || 0;\n\n      for (let i = 0; i < 16; ++i) {\n        buf[offset + i] = bytes[i];\n      }\n\n      return buf;\n    }\n\n    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(bytes);\n  } // Function#name is not settable on some platforms (#270)\n\n\n  try {\n    generateUUID.name = name; // eslint-disable-next-line no-empty\n  } catch (err) {} // For CommonJS default export support\n\n\n  generateUUID.DNS = DNS;\n  generateUUID.URL = URL;\n  return generateUUID;\n}\n\n//# sourceURL=webpack:///../node_modules/uuid/dist/esm-node/v35.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-node/v4.js":
/*!************************************************!*\
  !*** ../node_modules/uuid/dist/esm-node/v4.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"../node_modules/uuid/dist/esm-node/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"../node_modules/uuid/dist/esm-node/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack:///../node_modules/uuid/dist/esm-node/v4.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-node/v5.js":
/*!************************************************!*\
  !*** ../node_modules/uuid/dist/esm-node/v5.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ \"../node_modules/uuid/dist/esm-node/v35.js\");\n/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ \"../node_modules/uuid/dist/esm-node/sha1.js\");\n\n\nconst v5 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v5);\n\n//# sourceURL=webpack:///../node_modules/uuid/dist/esm-node/v5.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-node/validate.js":
/*!******************************************************!*\
  !*** ../node_modules/uuid/dist/esm-node/validate.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"../node_modules/uuid/dist/esm-node/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack:///../node_modules/uuid/dist/esm-node/validate.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-node/version.js":
/*!*****************************************************!*\
  !*** ../node_modules/uuid/dist/esm-node/version.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"../node_modules/uuid/dist/esm-node/validate.js\");\n\n\nfunction version(uuid) {\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Invalid UUID');\n  }\n\n  return parseInt(uuid.substr(14, 1), 16);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);\n\n//# sourceURL=webpack:///../node_modules/uuid/dist/esm-node/version.js?");

/***/ }),

/***/ "./classes/Errors.js":
/*!***************************!*\
  !*** ./classes/Errors.js ***!
  \***************************/
/***/ ((module) => {

eval("class errorHttp extends Error {\r\n    constructor(code, mess) {\r\n        super(mess);\r\n        this.name = \"errorHttp\";\r\n        this.code = code;\r\n        this.message = mess;\r\n    }\r\n}\r\n\r\nmodule.exports = errorHttp;\r\n\n\n//# sourceURL=webpack:///./classes/Errors.js?");

/***/ }),

/***/ "./classes/Person.js":
/*!***************************!*\
  !*** ./classes/Person.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { v4: uuidv4 } = __webpack_require__(/*! uuid */ \"../node_modules/uuid/dist/esm-node/index.js\");\r\n\r\nmodule.exports = class Person {\r\n    constructor(jsonPerson) {\r\n        const objPerson = JSON.parse(jsonPerson);\r\n        this.id = uuidv4();\r\n        this.name = objPerson.name;\r\n        this.age = objPerson.age;\r\n        this.hobbies = objPerson.hobbies;\r\n    }\r\n\r\n    updatePerson(jsonPerson) {\r\n        const objPerson = JSON.parse(jsonPerson);\r\n        for (const key in objPerson) {\r\n            if (Object.hasOwnProperty.call(this, key)) {\r\n                this[key] = objPerson[key]\r\n            }\r\n        }\r\n    }\r\n\r\n};\n\n//# sourceURL=webpack:///./classes/Person.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const http = __webpack_require__(/*! http */ \"http\");\r\nconst { router } = __webpack_require__(/*! ./tools/router */ \"./tools/router.js\")\r\nconst { getResponseSet } = __webpack_require__(/*! ./tools/oper */ \"./tools/oper.js\")\r\nconst dotenv = __webpack_require__(/*! dotenv */ \"../node_modules/dotenv/lib/main.js\");\r\nconst errorHttp = __webpack_require__(/*! ../src/classes/Errors */ \"./classes/Errors.js\");\r\n\r\nconst envParsed = dotenv.config().parsed;\r\nif (envParsed.error) {\r\n    throw envParsed.error\r\n}\r\nconst host = envParsed.HOST || 'localhost';\r\nconst port = envParsed.PORT || 3000;\r\n\r\nexports.global = staff = [];\r\n\r\nconst server = http.createServer();\r\nserver.listen(port, () => console.log('server is running on port', port));\r\nserver.on('request', reqHandler);\r\n\r\nfunction reqHandler(request, response) {\r\n    let { url, method, headers } = request;\r\n\r\n    reqBody = [];\r\n    request.on('error', (err) => console.log(err));\r\n    request.on('data', (chunk) => reqBody.push(chunk));\r\n    request.on('end', () => {\r\n        reqBody = Buffer.concat(reqBody).toString();\r\n        router(url, method);\r\n        let { resStatus, resMessage, resBody } = getResponseSet();\r\n        response.on('error', (err) => {\r\n            throw new errorHttp(500,)\r\n        });\r\n        response.writeHead(resStatus, resMessage, { 'Content-Type': 'application/json' })\r\n        response.write(resBody);\r\n        response.end();\r\n    });\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./tools/oper.js":
/*!***********************!*\
  !*** ./tools/oper.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const errorHttp = __webpack_require__(/*! ../classes/Errors */ \"./classes/Errors.js\");\r\nconst { isExistPersById,\r\n    getPersonById,\r\n    addPerson,\r\n    delPerson,\r\n    updPerson,\r\n    checkStructure } = __webpack_require__(/*! ./personAction */ \"./tools/personAction.js\")\r\n\r\nconst statusCode = __webpack_require__(/*! ./statusCodes */ \"./tools/statusCodes.json\")\r\n\r\nlet resSet = {}\r\nfunction setResponseSet(code, body = \"\") {\r\n    let mes = statusCode[code];\r\n    resSet = { resStatus: code, resMessage: mes, resBody: JSON.stringify(body) };\r\n    console.log(resSet.resStatus);\r\n}\r\n\r\nfunction getResponseSet() { return resSet }\r\n\r\nfunction postHandl(id = undefined) {\r\n\r\n    if (checkStructure(reqBody)) {\r\n        try {\r\n            let newPerson = addPerson(reqBody);\r\n            if (isExistPersById(newPerson.id)) {\r\n                setResponseSet(200, newPerson);\r\n            }\r\n            else {\r\n                setResponseSet(500, 'New person not created');\r\n            }\r\n        } catch (error) {\r\n            setResponseSet(500, \"Server can't store record\");\r\n        }\r\n    }\r\n    else {\r\n        setResponseSet(400, 'Structure person not valid, expect: \"name, age, hobbies\" ');\r\n    }\r\n};\r\n\r\nfunction putHandl(id) {\r\n    try {\r\n        updPerson(id, reqBody);\r\n        if (isExistPersById(id)) {\r\n            setResponseSet(201, getPersonById(id));\r\n        }\r\n        else {\r\n            setResponseSet(400, `Person with id=${id} not found`);\r\n            // throw new errorHttp(400, 'Person with id=${id} not found')\r\n        }\r\n\r\n    } catch (error) {\r\n        setResponseSet(500, `Server can't update person with id=${id}`);\r\n\r\n    }\r\n};\r\n\r\nfunction delHandl(id) {\r\n    delPerson(id);\r\n    if (!isExistPersById(id)) {\r\n        setResponseSet(200, 'Person deleted');\r\n    }\r\n    else {\r\n        setResponseSet(500, \"Server can't delete person\");\r\n    }\r\n};\r\n\r\nfunction getHandl(id, body = '') {\r\n    if (id) {\r\n        setResponseSet(200, staff.length == 0 ? 'There are no records' : getPersonById(id));\r\n    }\r\n    else {\r\n        setResponseSet(200, staff.length == 0 ? 'There are no records' : staff);\r\n    }\r\n};\r\n\r\nmodule.exports = {\r\n    postHandl,\r\n    putHandl,\r\n    getHandl,\r\n    delHandl,\r\n    setResponseSet,\r\n    getResponseSet\r\n}\n\n//# sourceURL=webpack:///./tools/oper.js?");

/***/ }),

/***/ "./tools/personAction.js":
/*!*******************************!*\
  !*** ./tools/personAction.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Person = __webpack_require__(/*! ../classes/Person */ \"./classes/Person.js\")\r\n\r\nfunction checkStructure(reqBody) {\r\n    let checkResult = true;\r\n    const correctStrucrure = [\"name\", \"age\", \"hobbies\"];\r\n    let reqBodyToObject = JSON.parse(reqBody);\r\n    correctStrucrure.forEach(key => {\r\n        if (!reqBodyToObject[key]) {\r\n            checkResult = false\r\n        }\r\n    })\r\n    return checkResult\r\n}\r\n\r\nfunction isExistPersById(id) {\r\n    return staff.find((item) => item.id == id)\r\n}\r\n\r\nfunction getPersonById(id) {\r\n    return staff.find((item) => item.id == id)\r\n}\r\n\r\nfunction addPerson(jsonPerson) {\r\n    try {\r\n        const newPerson = new Person(jsonPerson);\r\n        staff.push(newPerson);\r\n        return newPerson;\r\n    } catch (error) {\r\n        return undefined\r\n    }\r\n}\r\n\r\nfunction delPerson(id) {\r\n    staff.splice(staff.indexOf(getPersonById(id)), 1)\r\n}\r\n\r\nfunction updPerson(id, jsonPerson) {\r\n    getPersonById(id).updatePerson(jsonPerson);\r\n}\r\n\r\nmodule.exports = {\r\n    addPerson,\r\n    getPersonById,\r\n    delPerson,\r\n    updPerson,\r\n    isExistPersById,\r\n    checkStructure\r\n}\r\n\n\n//# sourceURL=webpack:///./tools/personAction.js?");

/***/ }),

/***/ "./tools/router.js":
/*!*************************!*\
  !*** ./tools/router.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { postHandl, putHandl, getHandl, delHandl, setResponseSet } = __webpack_require__(/*! ./oper.js */ \"./tools/oper.js\");\r\nconst { isExistPersById } = __webpack_require__(/*! ../tools/personAction */ \"./tools/personAction.js\")\r\nconst ErrorHttp = __webpack_require__(/*! ../classes/Errors */ \"./classes/Errors.js\");\r\n\r\nfunction router(url, method) {\r\n    const routHandler = {\r\n        'GET': getHandl,\r\n        'POST': postHandl,\r\n        'PUT': putHandl,\r\n        'DELETE': delHandl\r\n    }\r\n\r\n    const [path, id] = url.split(\"/\").splice(1);\r\n    if ((path != 'person') || (id == '')) {\r\n\r\n        setResponseSet(400, `Path ${url} not valid`);\r\n        // throw new ErrorHttp(400, `Path ${url} not valid`)\r\n        return\r\n    }\r\n\r\n    if ((id == undefined) && ((method == 'GET') || (method == 'POST'))) {\r\n        routHandler[method]()\r\n        return\r\n    }\r\n\r\n    if (id) {\r\n        if (method != 'POST') {\r\n            if (isExistPersById(id)) {\r\n                routHandler[method](id)\r\n            }\r\n            else {\r\n                setResponseSet(404, `Person with id=${id} not found`);\r\n            }\r\n        }\r\n        else {\r\n            setResponseSet(404, `Person Id  not expected`);\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = { router }\r\n\n\n//# sourceURL=webpack:///./tools/router.js?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "./tools/statusCodes.json":
/*!********************************!*\
  !*** ./tools/statusCodes.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"200\":\"OK\",\"201\":\"Created\",\"204\":\"No Content\",\"400\":\"Bad Request\",\"404\":\"Not Found\",\"500\":\"Internal Server Error\"}');\n\n//# sourceURL=webpack:///./tools/statusCodes.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;