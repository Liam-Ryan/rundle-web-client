import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  msInDay = 1000 * 60 * 60 * 24;
  daysUnderConstruction: number;

  constructor() {
  }

  ngOnInit() {
    // this.daysUnderConstruction = Math.round((Date.now() - Date.parse('06 May 2019 11:00:00 GMT')) / this.msInDay);
    this.daysUnderConstruction = 9;
  }

}
