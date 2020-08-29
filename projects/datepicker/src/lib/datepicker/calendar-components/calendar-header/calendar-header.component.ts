import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IDate } from '../../models/date.interface';
import { OutputEventInterface } from '../../models/output-event.interface';

@Component({
  selector: 'ngx-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarHeaderComponent {
  @Input() currentViewDate: IDate;
  @Output() showToday = new EventEmitter<OutputEventInterface<void>>();
  @Output() prevMonth = new EventEmitter<OutputEventInterface<void>>();
  @Output() nextMonth = new EventEmitter<OutputEventInterface<void>>();
  @Output() showYearsView = new EventEmitter<OutputEventInterface<void>>();
}
