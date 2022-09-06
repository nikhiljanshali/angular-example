import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-compare',
  templateUrl: './date-compare.component.html',
  styleUrls: ['./date-compare.component.scss'],
})
export class DateCompareComponent implements OnInit {
  todaysDate = new Date();

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    let aaa = new Date();

    console.log(aaa);
    let bbb = this.datePipe.transform(aaa, 'yyyy MM dd | hh:mm:ss z');

    console.log(bbb);
  }
}
