import { Component, OnInit } from '@angular/core';
import { KeyValuePair } from '../../models/key-value-pair';
import { RouterNavigationPair } from '../../models/router-navigation-pair';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.scss'],
})
export class NavTabComponent implements OnInit {
  public navidataionLinks: RouterNavigationPair[] = [];

  constructor() {}

  ngOnInit() {
    this.navidataionLinks = [];
    this.navidataionLinks.push(
      new RouterNavigationPair('Amount To Word', '/amountword', '1')
    );
    this.navidataionLinks.push(
      new RouterNavigationPair('Date-Time Compare', '/datetimecompare', '2')
    );
  }
}
