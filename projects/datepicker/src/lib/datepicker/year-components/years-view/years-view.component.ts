import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDate } from '../../models/date.interface';

@Component({
  selector: 'ngx-years-view',
  templateUrl: './years-view.component.html',
  styleUrls: ['./years-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearsViewComponent {
  @Input() readonly currentViewDate: IDate;
}
