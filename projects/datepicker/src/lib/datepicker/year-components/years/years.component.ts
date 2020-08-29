import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss'],
})
export class YearsComponent implements OnInit {
  @Input() readonly yearToShow: number;
  years = [];
  ngOnInit(): void {
    const numOfYearsPerPage = 24;
    const a = Math.floor(this.yearToShow / numOfYearsPerPage);
    const b = a * numOfYearsPerPage;
    const yearToShowIndexPlace = this.yearToShow - b;
    const firstYearInView = this.yearToShow - yearToShowIndexPlace;
    const lastYearInView = firstYearInView + numOfYearsPerPage;

    for (let i = firstYearInView; i < lastYearInView; i++) {
      this.years.push(i);
    }
  }
}
