import { Component, OnInit, Input } from '@angular/core';
import { SpreadsheetData } from 'src/app/interfaces/spreadsheet-data';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input() orders: SpreadsheetData[];
  currentIdx = 0;
  currentClass: string;

  constructor() { }

  ngOnInit(): void {
  }

  gotoPrevious() {
    this.currentIdx--;
  }

  gotoNext() {
    this.currentIdx++;
  }

  getStatusString(): string {
    if (this.orders[this.currentIdx].allDone === 'Y') {
      this.currentClass = 'all-done';
      return 'ALL DONE';
    } else if (this.orders[this.currentIdx].allDone === 'X'){
      this.currentClass = 'no-show'
      return 'NO SHOW';
    } else if (this.orders[this.currentIdx].readyToShipOrPickup){
      this.currentClass = 'ready';
      return 'READY';
    }
    this.currentClass = 'in-progress';
    return 'IN PROGRESS';
  }

}
