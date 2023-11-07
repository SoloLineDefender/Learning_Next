"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var image_1 = require("next/image");
var fonts_1 = require("@/app/ui/fonts");
var search_1 = require("@/app/ui/search");
function CustomersTable(_a) {
    var customers = _a.customers;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            return [2 /*return*/, (React.createElement("div", { className: "w-full" },
                    React.createElement("h1", { className: fonts_1.lusitana.className + " mb-8 text-xl md:text-2xl" }, "Customers"),
                    React.createElement(search_1["default"], { placeholder: "Search customers..." }),
                    React.createElement("div", { className: "mt-6 flow-root" },
                        React.createElement("div", { className: "overflow-x-auto" },
                            React.createElement("div", { className: "inline-block min-w-full align-middle" },
                                React.createElement("div", { className: "overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0" },
                                    React.createElement("div", { className: "md:hidden" }, customers === null || customers === void 0 ? void 0 : customers.map(function (customer) { return (React.createElement("div", { key: customer.id, className: "mb-2 w-full rounded-md bg-white p-4" },
                                        React.createElement("div", { className: "flex items-center justify-between border-b pb-4" },
                                            React.createElement("div", null,
                                                React.createElement("div", { className: "mb-2 flex items-center" },
                                                    React.createElement("div", { className: "flex items-center gap-3" },
                                                        React.createElement(image_1["default"], { src: customer.image_url, className: "rounded-full", alt: customer.name + "'s profile picture", width: 28, height: 28 }),
                                                        React.createElement("p", null, customer.name))),
                                                React.createElement("p", { className: "text-sm text-gray-500" }, customer.email))),
                                        React.createElement("div", { className: "flex w-full items-center justify-between border-b py-5" },
                                            React.createElement("div", { className: "flex w-1/2 flex-col" },
                                                React.createElement("p", { className: "text-xs" }, "Pending"),
                                                React.createElement("p", { className: "font-medium" }, customer.total_pending)),
                                            React.createElement("div", { className: "flex w-1/2 flex-col" },
                                                React.createElement("p", { className: "text-xs" }, "Paid"),
                                                React.createElement("p", { className: "font-medium" }, customer.total_paid))),
                                        React.createElement("div", { className: "pt-4 text-sm" },
                                            React.createElement("p", null,
                                                customer.total_invoices,
                                                " invoices")))); })),
                                    React.createElement("table", { className: "hidden min-w-full rounded-md text-gray-900 md:table" },
                                        React.createElement("thead", { className: "rounded-md bg-gray-50 text-left text-sm font-normal" },
                                            React.createElement("tr", null,
                                                React.createElement("th", { scope: "col", className: "px-4 py-5 font-medium sm:pl-6" }, "Name"),
                                                React.createElement("th", { scope: "col", className: "px-3 py-5 font-medium" }, "Email"),
                                                React.createElement("th", { scope: "col", className: "px-3 py-5 font-medium" }, "Total Invoices"),
                                                React.createElement("th", { scope: "col", className: "px-3 py-5 font-medium" }, "Total Pending"),
                                                React.createElement("th", { scope: "col", className: "px-4 py-5 font-medium" }, "Total Paid"))),
                                        React.createElement("tbody", { className: "divide-y divide-gray-200 text-gray-900" }, customers.map(function (customer) { return (React.createElement("tr", { key: customer.id, className: "group" },
                                            React.createElement("td", { className: "whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6" },
                                                React.createElement("div", { className: "flex items-center gap-3" },
                                                    React.createElement(image_1["default"], { src: customer.image_url, className: "rounded-full", alt: customer.name + "'s profile picture", width: 28, height: 28 }),
                                                    React.createElement("p", null, customer.name))),
                                            React.createElement("td", { className: "whitespace-nowrap bg-white px-4 py-5 text-sm" }, customer.email),
                                            React.createElement("td", { className: "whitespace-nowrap bg-white px-4 py-5 text-sm" }, customer.total_invoices),
                                            React.createElement("td", { className: "whitespace-nowrap bg-white px-4 py-5 text-sm" }, customer.total_pending),
                                            React.createElement("td", { className: "whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md" }, customer.total_paid))); })))))))))];
        });
    });
}
exports["default"] = CustomersTable;
