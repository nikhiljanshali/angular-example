import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrencytowordService } from './service/currencytoword.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/component/header/header.component';
import { NavTabComponent } from './shared/component/nav-tab/nav-tab.component';
import { AmountWordComponent } from './pages/amount-word/amount-word.component';
import { DatePipe } from '@angular/common';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  providers: [CurrencytowordService, DatePipe],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavTabComponent,
    AmountWordComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
