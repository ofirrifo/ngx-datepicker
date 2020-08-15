import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CalendarDay } from '../../models/calendar-day.interface';
import { OutputEventInterface } from '../../models/output-event.interface';

@Component({
  selector: 'ngx-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaysComponent implements OnChanges {
  @Input() days: CalendarDay[] = [];
  @Output() selected = new EventEmitter<OutputEventInterface<CalendarDay>>();

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      Array.from(document.querySelectorAll('.day')).forEach((element: HTMLElement) => {
        const dateInMs = parseInt(element.getAttribute('data-date-in-ms'));
        if (dateInMs >= 1596661200000 && dateInMs <= 1596920400000) {
          element.classList.add('mystyle');
        }
      });
    });
  }

  trackByFn(index, day: CalendarDay): number {
    return day?.dateInMs;
  }
}
