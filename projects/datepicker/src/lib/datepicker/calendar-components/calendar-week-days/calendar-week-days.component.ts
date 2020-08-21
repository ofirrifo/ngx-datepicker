import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-calendar-week-days',
  templateUrl: './calendar-week-days.component.html',
  styleUrls: ['./calendar-week-days.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarWeekDaysComponent {}
