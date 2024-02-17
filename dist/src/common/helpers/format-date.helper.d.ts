export declare function shortDate(date: Date): string;
export declare function longDate(data: Date): string;
export declare function parseShortDate(date: string | undefined | null): Date;
export declare function getStartOfDate(date: string): Date;
export declare function getEndOfDate(date: string): Date;
export declare function daysInMonth(year: number, month: number): number;
export declare function dateDiff(first: Date, second: Date): number;
export declare function getNow(): {
    startOfDate: Date;
    endOfDate: Date;
};
