"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var nav_links_1 = require("@/app/ui/dashboard/nav-links");
var acme_logo_1 = require("@/app/ui/acme-logo");
var outline_1 = require("@heroicons/react/24/outline");
function SideNav() {
    return (React.createElement("div", { className: "flex h-full flex-col px-3 py-4 md:px-2" },
        React.createElement(link_1["default"], { className: "mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40", href: "/" },
            React.createElement("div", { className: "w-32 text-white md:w-40" },
                React.createElement(acme_logo_1["default"], null))),
        React.createElement("div", { className: "flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2" },
            React.createElement(nav_links_1["default"], null),
            React.createElement("div", { className: "hidden h-auto w-full grow rounded-md bg-gray-50 md:block" }),
            React.createElement("form", null,
                React.createElement("button", { className: "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" },
                    React.createElement(outline_1.PowerIcon, { className: "w-6" }),
                    React.createElement("div", { className: "hidden md:block" }, "Sign Out"))))));
}
exports["default"] = SideNav;
