import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-years-header',
  templateUrl: './years-header.component.html',
  styleUrls: ['./years-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearsHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
