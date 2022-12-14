import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmountWordComponent } from './pages/amount-word/amount-word.component';
import { DateCompareComponent } from './pages/date-compare/date-compare.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: AmountWordComponent },
  { path: 'amountword', component: AmountWordComponent },
  { path: 'datetimecompare', component: DateCompareComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // <-- debugging purposes only
      // preloadingStrategy: SelectivePreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
