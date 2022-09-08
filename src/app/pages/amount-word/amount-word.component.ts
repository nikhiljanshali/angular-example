import { Component, OnInit } from '@angular/core';
import { listCurrencyType } from '../../constant/static-const';
import { CurrencytowordService } from '../../service/currencytoword.service';

@Component({
  selector: 'app-amount-word',
  templateUrl: './amount-word.component.html',
  styleUrls: ['./amount-word.component.scss'],
})
export class AmountWordComponent implements OnInit {
  amount: string = '55';
  // amount: string = '92,233,720,368,547,800.95';
  indianWord: String = '';
  americanWord: String = '';

  constructor(private currencytowordService: CurrencytowordService) {}

  ngOnInit(): void {
    console.clear();
    this.indianWord = this.currencytowordService.convertAmountToIndianWord(
      this.amount.toString()
    );
    this.americanWord = this.currencytowordService.convertAmountToAmericanWord(
      this.amount.toString()
    );
  }

  public checkConversion(): void {
    console.clear();
    this.indianWord = this.currencytowordService.convertAmountToIndianWord(
      this.amount.toString()
    );
    this.americanWord = this.currencytowordService.convertAmountToAmericanWord(
      this.amount.toString()
    );
  }
}
