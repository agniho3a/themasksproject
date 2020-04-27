import { Component, OnInit, Input } from '@angular/core';
import { SpreadsheetSummary } from 'src/app/interfaces/spreadsheet-summary';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  @Input() summary: SpreadsheetSummary;
  
  constructor() { }

  ngOnInit(): void {
  }

}
