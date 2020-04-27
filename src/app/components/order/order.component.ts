import { Component, OnInit } from '@angular/core';
import { Spreadsheet } from 'src/app/interfaces/spreadsheet';
import { SpreadsheetData } from 'src/app/interfaces/spreadsheet-data';
import { SpreadsheetSummary } from 'src/app/interfaces/spreadsheet-summary';
import { JsonbinService } from 'src/app/services/jsonbin.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  trackerDetails: Spreadsheet;
  trackerData: SpreadsheetData[];
  trackerSummary: SpreadsheetSummary;

  constructor(private jsonBinSvc: JsonbinService) { }

  ngOnInit(): void {
    this.jsonBinSvc.getExportedOrders().subscribe(sprdSheet => {
      this.trackerData = sprdSheet.data;
      this.trackerSummary = sprdSheet.summary;
      this.trackerDetails = sprdSheet;
    });
  }

}
