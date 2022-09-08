import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import {
  CompareValidator,
  CompareValueValidator,
} from '../constant/static-const';

@Injectable()
export class DateCompareService {
  /**
   * static varibale
   */
  private compareValidator = CompareValidator;
  private compareValueValidator = CompareValueValidator;

  constructor(private datePipe: DatePipe) {}

  /**
   * compare input date with current date
   */
  public compareInputDateWithTodayDate(
    inputDate: Date,
    compareType: string
  ): string {
    const dateOne = this.datePipe.transform(new Date(inputDate), 'dd/MM/yyyy');
    const dateTwo = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
    let flag: string = '';
    // 1. Abstract equality check
    if (this.compareValidator.EqualTo == compareType) {
      if (dateOne == dateTwo) {
        flag = this.compareValueValidator.$Equal;
      } else {
        flag = this.compareValueValidator.$NotEqual;
      }
    }

    // 2. Strict equality check
    if (this.compareValidator.StrictEqualTo == compareType) {
      if (dateOne === dateTwo) {
        flag = this.compareValueValidator.$Equal;
      } else {
        flag = this.compareValueValidator.$NotEqual;
      }
    }

    // 3. Greater than check
    if (this.compareValidator.GreaterThan == compareType) {
      if (dateOne > dateTwo) {
        flag = this.compareValueValidator.$GreaterThan;
      } else {
        flag = this.compareValueValidator.$NotGreaterThan;
      }
    }

    // 4. Less than check
    if (this.compareValidator.LessThan == compareType) {
      if (dateOne < dateTwo) {
        flag = this.compareValueValidator.$LessThan;
      } else {
        flag = this.compareValueValidator.$NotLessThan;
      }
    }
    return flag;
  }

  /**
   * compare input time with current time
   */
  public compareInputTimeWithCurrentTime(
    inputDate: Date,
    compareType: string
  ): string {
    const dateOne = this.datePipe.transform(new Date(inputDate), 'hh:mm:ss');
    const dateTwo = this.datePipe.transform(new Date(), 'hh:mm:ss');
    let flag: string = '';
    // 1. Abstract equality check
    if (this.compareValidator.EqualTo == compareType) {
      if (dateOne == dateTwo) {
        flag = this.compareValueValidator.$Equal;
      } else {
        flag = this.compareValueValidator.$NotEqual;
      }
    }

    // 2. Strict equality check
    if (this.compareValidator.StrictEqualTo == compareType) {
      if (dateOne === dateTwo) {
        flag = this.compareValueValidator.$Equal;
      } else {
        flag = this.compareValueValidator.$NotEqual;
      }
    }

    // 3. Greater than check
    if (this.compareValidator.GreaterThan == compareType) {
      if (dateOne > dateTwo) {
        flag = this.compareValueValidator.$GreaterThan;
      } else {
        flag = this.compareValueValidator.$NotGreaterThan;
      }
    }

    // 4. Less than check
    if (this.compareValidator.LessThan == compareType) {
      if (dateOne < dateTwo) {
        flag = this.compareValueValidator.$LessThan;
      } else {
        flag = this.compareValueValidator.$NotLessThan;
      }
    }
    return flag;
  }
}
