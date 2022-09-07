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
  /**
   * https://programmingwithswift.com/how-to-compare-dates-with-typescript/
   */
  todaysDate = new Date();
  compareDate: string = '';

  public value: Date;
  public counter: number = 0;

  public TestEnum = CompareValidator;

  constructor(
    private datePipe: DatePipe,
    private dateCompareService: DateCompareService
  ) {}

  ngOnInit() {
    this.compareDate = this.datePipe.transform(
      this.todaysDate,
      'dd/MM/yyyy  hh:mm:ss z'
    );
    console.log(CompareValidator);
  }

  public IncreaseDate(cnt: number): void {
    this.counter = cnt + 1;
    this.todaysDate.setDate(new Date().getDate() + this.counter);
    this.compareDate = this.datePipe.transform(
      this.todaysDate,
      'dd/MM/yyyy  hh:mm:ss z'
    );
  }

  public ResetDate(): void {
    this.todaysDate = new Date();
    this.compareDate = this.datePipe.transform(
      this.todaysDate,
      'dd/MM/yyyy  hh:mm:ss z'
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
