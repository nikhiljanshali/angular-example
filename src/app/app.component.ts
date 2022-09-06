import { Component, OnInit, VERSION } from '@angular/core';
import { listCurrencyType } from './constant/static-const';
import { CurrencytowordService } from './service/currencytoword.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
