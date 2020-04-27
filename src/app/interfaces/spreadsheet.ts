import { SpreadsheetSummary } from './spreadsheet-summary';
import { SpreadsheetData } from './spreadsheet-data';

export interface Spreadsheet {
    summary: SpreadsheetSummary;
    data: SpreadsheetData[];
}
