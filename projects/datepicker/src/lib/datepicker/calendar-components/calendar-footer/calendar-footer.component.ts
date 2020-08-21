import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-calendar-footer',
  templateUrl: './calendar-footer.component.html',
  styleUrls: ['./calendar-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarFooterComponent {}
