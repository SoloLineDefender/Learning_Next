'use client';
"use strict";
exports.__esModule = true;
var outline_1 = require("@heroicons/react/24/outline");
var clsx_1 = require("clsx");
var link_1 = require("next/link");
function Pagination(_a) {
    // NOTE: comment in this code when you get to this point in the course
    var totalPages = _a.totalPages;
    // const allPages = generatePagination(currentPage, totalPages);
    return (React.createElement(React.Fragment, null));
}
exports["default"] = Pagination;
function PaginationNumber(_a) {
    var page = _a.page, href = _a.href, isActive = _a.isActive, position = _a.position;
    var className = clsx_1["default"]('flex h-10 w-10 items-center justify-center text-sm border', {
        'rounded-l-md': position === 'first' || position === 'single',
        'rounded-r-md': position === 'last' || position === 'single',
        'z-10 bg-blue-600 border-blue-600 text-white': isActive,
        'hover:bg-gray-100': !isActive && position !== 'middle',
        'text-gray-300': position === 'middle'
    });
    return isActive || position === 'middle' ? (React.createElement("div", { className: className }, page)) : (React.createElement(link_1["default"], { href: href, className: className }, page));
}
function PaginationArrow(_a) {
    var href = _a.href, direction = _a.direction, isDisabled = _a.isDisabled;
    var className = clsx_1["default"]('flex h-10 w-10 items-center justify-center rounded-md border', {
        'pointer-events-none text-gray-300': isDisabled,
        'hover:bg-gray-100': !isDisabled,
        'mr-2 md:mr-4': direction === 'left',
        'ml-2 md:ml-4': direction === 'right'
    });
    var icon = direction === 'left' ? (React.createElement(outline_1.ArrowLeftIcon, { className: "w-4" })) : (React.createElement(outline_1.ArrowRightIcon, { className: "w-4" }));
    return isDisabled ? (React.createElement("div", { className: className }, icon)) : (React.createElement(link_1["default"], { className: className, href: href }, icon));
}
