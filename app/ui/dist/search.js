'use client';
"use strict";
exports.__esModule = true;
var outline_1 = require("@heroicons/react/24/outline");
function Search(_a) {
    var placeholder = _a.placeholder;
    return (React.createElement("div", { className: "relative flex flex-1 flex-shrink-0" },
        React.createElement("label", { htmlFor: "search", className: "sr-only" }, "Search"),
        React.createElement("input", { className: "peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500", placeholder: placeholder }),
        React.createElement(outline_1.MagnifyingGlassIcon, { className: "absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" })));
}
exports["default"] = Search;
