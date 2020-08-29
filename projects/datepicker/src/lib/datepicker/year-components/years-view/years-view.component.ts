import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-years-view',
  templateUrl: './years-view.component.html',
  styleUrls: ['./years-view.component.scss'],
})
export class YearsViewComponent {
  @Input() readonly yearToShow: number;
}
