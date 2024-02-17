import { Column, Workbook, Worksheet } from 'exceljs';
export declare class ExcelHelper {
    workBook: Workbook;
    constructor();
    format(sheet: Worksheet): void;
    autoSize(column: Partial<Column>): void;
    style(column: Partial<Column>): void;
    writeFile(filename: string): void;
}
