import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-week-days-header',
  templateUrl: './week-days-header.component.html',
  styleUrls: ['./week-days-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeekDaysHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
