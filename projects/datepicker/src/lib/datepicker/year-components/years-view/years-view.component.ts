import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-years-view',
  templateUrl: './years-view.component.html',
  styleUrls: ['./years-view.component.scss'],
})
export class YearsViewComponent implements OnInit {
  years = [];

  ngOnInit(): void {
    const numOfYearsPerPage = 24;
    const yearToShow = 1993;
    const a = Math.floor(yearToShow / numOfYearsPerPage);
    const b = a * numOfYearsPerPage;
    const c = yearToShow - b;
    const startYear = yearToShow - c;
    const endYear = startYear + numOfYearsPerPage;

    for (let i = startYear; i < endYear; i++) {
      this.years.push(i);
    }
  }
}
