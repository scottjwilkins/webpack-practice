webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

  var image = document.createElement('img');

  image.src = _small2.default;

  document.body.appendChild(image);
};

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "img {\n  border: 10px solid #000;\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ })
]);