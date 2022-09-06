import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  version = VERSION.full;

  constructor() {}

  ngOnInit() {}
}
