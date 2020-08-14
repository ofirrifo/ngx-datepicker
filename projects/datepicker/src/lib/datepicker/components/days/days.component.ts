import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarDay } from '../../models/calendar-day.interface';
import { OutputEventInterface } from '../../models/output-event.interface';

@Component({
  selector: 'ngx-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaysComponent {
  @Input() days: CalendarDay[] = [];
  @Output() selected = new EventEmitter<OutputEventInterface<CalendarDay>>();
}
