import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrencytowordService } from './service/currencytoword.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VoterComponent } from './ui/voter/voter.component';
import { AmountWordComponent } from './ui/amount-word/amount-word.component';

@NgModule({
  providers: [CurrencytowordService],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  declarations: [AppComponent, VoterComponent, AmountWordComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
