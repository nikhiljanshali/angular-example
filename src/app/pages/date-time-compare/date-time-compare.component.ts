import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time-compare',
  templateUrl: './date-time-compare.component.html',
  styleUrls: ['./date-time-compare.component.scss'],
})
export class DateTimeCompareComponent implements OnInit {
  todayDate = new Date();
  constructor() {}

  ngOnInit() {}
}
