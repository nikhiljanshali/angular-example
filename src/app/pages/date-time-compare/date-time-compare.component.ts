import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-time-compare',
  templateUrl: './date-time-compare.component.html',
  styleUrls: ['./date-time-compare.component.scss'],
})
export class DateTimeCompareComponent implements OnInit {
  todayDate: string = '';

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.todayDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
  }
}
