"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNow = exports.dateDiff = exports.daysInMonth = exports.getEndOfDate = exports.getStartOfDate = exports.parseShortDate = exports.longDate = exports.shortDate = void 0;
function shortDate(date) {
    return date.toLocaleDateString('vi-VN', { month: '2-digit', day: '2-digit' });
}
exports.shortDate = shortDate;
function longDate(data) {
    return data.toLocaleDateString('vi-VN', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}
exports.longDate = longDate;
function parseShortDate(date) {
    if (!date)
        return new Date();
    const [day, month] = date.split('-');
    const currentDate = new Date();
    const result = new Date(currentDate.getFullYear(), parseInt(month, 10) - 1, parseInt(day, 10));
    result.setUTCHours(0, 0, 0, 0);
    return result;
}
exports.parseShortDate = parseShortDate;
function getStartOfDate(date) {
    const startDate = new Date(date);
    startDate.setDate(startDate.getDate() + 1);
    startDate.setHours(0, 0, 0, 0);
    return startDate;
}
exports.getStartOfDate = getStartOfDate;
function getEndOfDate(date) {
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 1);
    endDate.setHours(23, 59, 59, 999);
    return endDate;
}
exports.getEndOfDate = getEndOfDate;
function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
exports.daysInMonth = daysInMonth;
function dateDiff(first, second) {
    return Math.round((second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24));
}
exports.dateDiff = dateDiff;
function getNow() {
    const now = new Date();
    const startOfDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
    const endOfDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    return { startOfDate, endOfDate };
}
exports.getNow = getNow;
//# sourceMappingURL=format-date.helper.js.map