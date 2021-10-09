"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.clearExtraSpace = void 0;
var testStr = "  I   LOVE    STACKOVERFLOW   LOL       "; // "I LOVE STACKOVERFLOW LOL"
var clearExtraSpace = function (value) {
    return value.replace(/[\s/]+/g, " ").trim();
};
exports.clearExtraSpace = clearExtraSpace;
console.log((0, exports.clearExtraSpace)(testStr));
var removeSpaces = function (str) {
    var chars = str.split('');
    var nextChars = chars.reduce(function (acc, c) {
        if (c === ' ') {
            var lastChar = acc[acc.length - 1];
            if (lastChar === ' ') {
                return acc;
            }
        }
        return __spreadArray(__spreadArray([], acc, true), [c], false);
    }, []);
    var nextStr = nextChars.join('');
    return nextStr;
};
console.log(removeSpaces(testStr).trim());
