"use strict";
exports.__esModule = true;
var outline_1 = require("@heroicons/react/24/outline");
var clsx_1 = require("clsx");
function InvoiceStatus(_a) {
    var status = _a.status;
    return (React.createElement("span", { className: clsx_1["default"]('inline-flex items-center rounded-full px-2 py-1 text-xs', {
            'bg-gray-100 text-gray-500': status === 'pending',
            'bg-green-500 text-white': status === 'paid'
        }) },
        status === 'pending' ? (React.createElement(React.Fragment, null,
            "Pending",
            React.createElement(outline_1.ClockIcon, { className: "ml-1 w-4 text-gray-500" }))) : null,
        status === 'paid' ? (React.createElement(React.Fragment, null,
            "Paid",
            React.createElement(outline_1.CheckIcon, { className: "ml-1 w-4 text-white" }))) : null));
}
exports["default"] = InvoiceStatus;
