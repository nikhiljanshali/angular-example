import { Component, OnInit, VERSION } from '@angular/core';
import { listCurrencyType } from './constant/static-const';
import { CurrencytowordService } from './service/currencytoword.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  amount: number = 0;
  indianWord: String = '';
  americanWord: String = '';
  version = VERSION.full;

  constructor(private currencytowordService: CurrencytowordService) {}

  ngOnInit(): void {
    this.amount = 55555.55;
    this.indianWord = this.currencytowordService.convertAmoutToWord(
      this.amount,
      listCurrencyType.INR
    );
    this.americanWord = this.currencytowordService.convertAmoutToWord(
      this.amount,
      listCurrencyType.USD
    );
  }
}
