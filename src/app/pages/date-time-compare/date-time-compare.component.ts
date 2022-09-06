import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-time-compare',
  templateUrl: './date-time-compare.component.html',
  styleUrls: ['./date-time-compare.component.scss'],
})
export class DateTimeCompareComponent implements OnInit {
  myDateValue: Date;

  ngOnInit() {
    this.myDateValue = new Date();
  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }
}
