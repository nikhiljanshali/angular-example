import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  CompareValidator,
  CompareValueValidator,
} from '../../constant/static-const';
import { DateCompareService } from '../../service/date-compare.service';

@Component({
  selector: 'app-date-compare',
  templateUrl: './date-compare.component.html',
  styleUrls: ['./date-compare.component.scss'],
})
export class DateCompareComponent implements OnInit {
  todaysDate = new Date();
  displayDate: string = '';

  public value: Date;
  public counter: number = 1;

  constructor(
    private datePipe: DatePipe,
    private dateCompareService: DateCompareService
  ) {}

  ngOnInit() {
    this.todaysDate = new Date();
    this.displayDate = this.datePipe.transform(
      this.todaysDate,
      'dd/MM/yyyy || hh:mm:ss z'
    );
  }

  public IncreaseDate(cnt: number): void {
    cnt++;
    this.todaysDate = new Date();
    this.todaysDate.setDate(this.todaysDate.getDate() + cnt);
    this.displayDate = this.datePipe.transform(
      this.todaysDate,
      'dd/MM/yyyy || hh:mm:ss z'
    );
  }

  public CheckComparison(): boolean {
    let dateCompare =
      this.dateCompareService.compareInputDateWithTodayDate(
        this.todaysDate,
        CompareValidator.EqualTo
      ) == CompareValueValidator.$Equal;
    console.info(dateCompare);

    let timeCompare =
      this.dateCompareService.compareInputTimeWithCurrentTime(
        this.todaysDate,
        CompareValidator.EqualTo
      ) == CompareValueValidator.$Equal;
    console.info(timeCompare);
    return false;
  }
}
