import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CompareValidator } from '../../constant/static-const';
import { DateCompareService } from '../../service/date-compare.service';

@Component({
  selector: 'app-date-compare',
  templateUrl: './date-compare.component.html',
  styleUrls: ['./date-compare.component.scss'],
})
export class DateCompareComponent implements OnInit {
  todaysDate = new Date();
  displayDate: string = '';

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

  public dateCompare(): boolean {
    console.log(
      this.dateCompareService.compareInputDateWithTodayDate(
        this.todaysDate,
        CompareValidator.LessThan
      )
    );
    return false;
  }
}
