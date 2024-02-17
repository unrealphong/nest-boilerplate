"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelHelper = void 0;
const exceljs_1 = require("exceljs");
class ExcelHelper {
    constructor() {
        this.workBook = new exceljs_1.Workbook();
    }
    format(sheet) {
        sheet.columns.forEach((column) => {
            this.autoSize(column);
            this.style(column);
        });
    }
    autoSize(column) {
        let maxLength = 0;
        if (column.eachCell) {
            column.eachCell({ includeEmpty: true }, function (cell) {
                const columnLength = cell.value ? cell.value.toString().length : 10;
                if (columnLength > maxLength) {
                    maxLength = columnLength;
                }
            });
        }
        column.width = maxLength < 10 ? 10 : maxLength;
    }
    style(column) {
        if (column.eachCell) {
            column.eachCell({ includeEmpty: true }, function (cell) {
                cell.style = {
                    alignment: {
                        horizontal: 'center',
                        vertical: 'middle'
                    },
                    border: {
                        bottom: {
                            color: {
                                argb: '#000'
                            },
                            style: 'thin'
                        },
                        top: {
                            color: {
                                argb: '#000'
                            },
                            style: 'thin'
                        },
                        left: {
                            color: {
                                argb: '#000'
                            },
                            style: 'thin'
                        },
                        right: {
                            color: {
                                argb: '#000'
                            },
                            style: 'thin'
                        }
                    }
                };
            });
        }
    }
    writeFile(filename) {
        if (filename.includes('.xlsx')) {
            this.workBook.xlsx.writeFile(`excel/${filename}`);
        }
        else {
            this.workBook.xlsx.writeFile(`excel/${filename}.xlsx`);
        }
    }
}
exports.ExcelHelper = ExcelHelper;
//# sourceMappingURL=excel.helper.js.map