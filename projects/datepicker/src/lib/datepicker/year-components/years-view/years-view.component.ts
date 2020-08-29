import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-years-view',
  templateUrl: './years-view.component.html',
  styleUrls: ['./years-view.component.scss'],
})
export class YearsViewComponent implements OnInit {
  years = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 2016; i < 2040; i++) {
      this.years.push(i);
    }
  }
}
