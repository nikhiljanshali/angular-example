import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  CompareValidator,
  CompareValueValidator,
} from '../../constant/static-const';
import { ConversionService } from '../../service/conversion.service';
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

  public _compareValidator: Array<{ id: string; name: string }> = [];
  public selected: any;

  public dateCompare: boolean = false;
  public dataMatch: string = '-';

  constructor(
    private datePipe: DatePipe,
    private dateCompareService: DateCompareService,
    private conversionService: ConversionService
  ) {}

  ngOnInit() {
    this.compareDate = this.datePipe.transform(
      this.todaysDate,
      'dd/MM/yyyy  hh:mm:ss'
    );

    this._compareValidator =
      this.conversionService.convertEnumToKeyValuePairObject(CompareValidator);
  }

  /**
   * increate date
   */
  public IncreaseDate(cnt: number): void {
    this.counter = cnt + 1;
    this.todaysDate.setDate(new Date().getDate() + this.counter);
    this.compareDate = this.datePipe.transform(
      this.todaysDate,
      'dd/MM/yyyy  hh:mm:ss'
    );
  }

  /**
   * Decrease date
   */
  public DecreaseDate(cnt: number): void {
    this.counter = cnt - 1;
    this.todaysDate.setDate(new Date().getDate() + this.counter);
    this.compareDate = this.datePipe.transform(
      this.todaysDate,
      'dd/MM/yyyy  hh:mm:ss'
    );
  }

  /**
   * rest date
   */
  public ResetDate(): void {
    this.todaysDate = new Date();
    this.compareDate = this.datePipe.transform(
      this.todaysDate,
      'dd/MM/yyyy  hh:mm:ss'
    );
    console.clear();
  }

  /**
   * depricated function due to button commented
   */
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

  /**
   * option selection changes
   */
  public onOptionsSelected(): void {
    this.dataMatch = this.selected.name;
    if (this.selected.id == CompareValidator.EqualTo) {
      this.dateCompare =
        this.dateCompareService.compareInputDateWithTodayDate(
          this.todaysDate,
          CompareValidator.EqualTo
        ) == CompareValueValidator.$Equal;
    }
    if (this.selected.id == CompareValidator.StrictEqualTo) {
      this.dateCompare =
        this.dateCompareService.compareInputDateWithTodayDate(
          this.todaysDate,
          CompareValidator.StrictEqualTo
        ) == CompareValueValidator.$Equal;
    }
    if (this.selected.id == CompareValidator.GreaterThan) {
      this.dateCompare =
        this.dateCompareService.compareInputDateWithTodayDate(
          this.todaysDate,
          CompareValidator.GreaterThan
        ) == CompareValueValidator.$GreaterThan;
    }
    if (this.selected.id == CompareValidator.LessThan) {
      this.dateCompare =
        this.dateCompareService.compareInputDateWithTodayDate(
          this.todaysDate,
          CompareValidator.LessThan
        ) == CompareValueValidator.$LessThan;
    }
  }
}
