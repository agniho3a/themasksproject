import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { JsonbinService } from 'src/app/services/jsonbin.service';
import { Observable, throwError } from 'rxjs';
import { SpreadsheetSummary } from 'src/app/interfaces/spreadsheet-summary';
import { SpreadsheetData } from 'src/app/interfaces/spreadsheet-data';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnChanges, AfterViewInit{

  constructor(private jsonBinSvc: JsonbinService) { }
 
  records: SpreadsheetData[];
  summary: SpreadsheetSummary;

  idx = 0;
  isAtHead = true;
  isAtTail = true;

  ngOnInit(): void {
    console.log('OnInit called');
    // this.jsonBinSvc.getExportedOrders().subscribe(a => {
    //   console.log(a);
    //   this.summary = a['summary'];
    //   (<any[]> a['data']).forEach((val, idx) => {
    //     this.records.push(val);
    //   });
    // });

    this.jsonBinSvc.getExportedOrders().subscribe(sheet => {
      this.records = sheet.data;
      this.summary = sheet.summary;
    });
    
  }

  ngAfterViewInit(): void {
    //this.populateSummary();
  }

  ngOnChanges(): void {
    console.log('OnChanges called');
  }

  testClick() {
    console.log('Clicked');
    
  }

  clearAll() {
    this.records = [];
    this.idx = 0;
  }

  incrementIdx() {
    this.idx += 1;
    this.isAtHead = false;
    this.isAtTail = (this.idx == this.records.length - 1);
  }

  decrementIdx() {
    this.idx -= 1;
    this.isAtTail = false;
    this.isAtHead = (this.idx == 0);
  }
  
}
