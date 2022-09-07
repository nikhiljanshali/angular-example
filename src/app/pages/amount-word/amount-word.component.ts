import { Component, OnInit } from '@angular/core';
import { listCurrencyType } from '../../constant/static-const';
import { CurrencytowordService } from '../../service/currencytoword.service';

@Component({
  selector: 'app-amount-word',
  templateUrl: './amount-word.component.html',
  styleUrls: ['./amount-word.component.scss'],
})
export class AmountWordComponent implements OnInit {
  amount: number = 5555.55;
  indianWord: String = '';
  americanWord: String = '';

  constructor(private currencytowordService: CurrencytowordService) {}

  ngOnInit(): void {
    this.indianWord = this.currencytowordService.convertAmountToIndianWord(
      this.amount.toString()
    );
    this.americanWord = this.currencytowordService.convertAmoutToWord(
      this.amount,
      listCurrencyType.USD
    );
  }

  public checkConversion(): void {
    this.indianWord = this.currencytowordService.convertAmountToIndianWord(
      this.amount.toString()
    );
    this.americanWord = this.currencytowordService.convertAmoutToWord(
      this.amount,
      listCurrencyType.USD
    );
  }
}
