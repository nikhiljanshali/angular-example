import { Injectable } from '@angular/core';
import {
  CompareValidator,
  CompareValueValidator,
} from '../constant/static-const';

@Injectable()
export class DateCompareService {
  private compareValidator = CompareValidator;
  private compareValueValidator = CompareValueValidator;
  constructor() {}

  public compareInputDateWithTodayDate(
    inputDate: Date,
    compareType: string
  ): string {
    const dateOne = new Date(inputDate);
    const dateTwo = new Date();
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
