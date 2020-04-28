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
    let animation = 'headShake';
    if (this.currentIdx > 0) {
      this.currentIdx--;
      animation = 'slideInLeft';
    }
    this.animateCSS('.details-box', animation);
  }

  gotoNext() {
    let animation = 'headShake';
    if (this.currentIdx < this.orders.length - 1) {
      this.currentIdx++;
      animation = 'slideInRight';
    }
    this.animateCSS('.details-box', animation);
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

  animateCSS(element, animationName) {
    const node = document.querySelector(element);

    node.classList.add('animated', 'faster', animationName);
    node.addEventListener('animationend', () => {
      node.classList.remove('animated', 'faster', animationName);
    });
  }


}
