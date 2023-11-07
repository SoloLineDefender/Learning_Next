"use strict";
exports.__esModule = true;
var clsx_1 = require("clsx");
var link_1 = require("next/link");
var fonts_1 = require("@/app/ui/fonts");
function Breadcrumbs(_a) {
    var breadcrumbs = _a.breadcrumbs;
    return (React.createElement("nav", { "aria-label": "Breadcrumb", className: "mb-6 block" },
        React.createElement("ol", { className: clsx_1.clsx(fonts_1.lusitana.className, 'flex text-xl md:text-2xl') }, breadcrumbs.map(function (breadcrumb, index) { return (React.createElement("li", { key: breadcrumb.href, "aria-current": breadcrumb.active, className: clsx_1.clsx(breadcrumb.active ? 'text-gray-900' : 'text-gray-500') },
            React.createElement(link_1["default"], { href: breadcrumb.href }, breadcrumb.label),
            index < breadcrumbs.length - 1 ? (React.createElement("span", { className: "mx-3 inline-block" }, "/")) : null)); }))));
}
exports["default"] = Breadcrumbs;
