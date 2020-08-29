import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IDate } from '../../models/date.interface';
import { OutputEventInterface } from '../../models/output-event.interface';
import { CalendarDay } from '../../models/calendar-day.interface';

@Component({
  selector: 'ngx-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  @Input() days: CalendarDay[] = [];
  @Input() currentViewDate: IDate;
  @Output() selectionChanged = new EventEmitter<OutputEventInterface<CalendarDay>>();
  @Output() showToday = new EventEmitter<OutputEventInterface<void>>();
  @Output() prevMonth = new EventEmitter<OutputEventInterface<void>>();
  @Output() nextMonth = new EventEmitter<OutputEventInterface<void>>();
  @Output() showYearsView = new EventEmitter<OutputEventInterface<void>>();
}
