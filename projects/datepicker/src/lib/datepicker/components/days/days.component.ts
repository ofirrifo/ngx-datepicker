import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { CalendarDay } from '../../models/calendar-day.interface';
import { OutputEventInterface } from '../../models/output-event.interface';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ngx-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaysComponent implements OnChanges {
  @Input() days: CalendarDay[] = [];
  @Output() selected = new EventEmitter<OutputEventInterface<CalendarDay>>();

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  ngOnChanges(changes: SimpleChanges): void {
    // setTimeout(() => {
    //   Array.from(this.document.querySelectorAll('.day-value')).forEach((element: HTMLElement) => {
    //     const dateInMs = parseInt(element.getAttribute('data-date-in-ms'));
    //     const startSelectedDate = 1596661200000;
    //     const endSelectedDate = 1597006800000;
    //
    //     if (dateInMs >= startSelectedDate && dateInMs <= endSelectedDate) {
    //       this.renderer.addClass(element, 'range-day-marker');
    //       if (dateInMs === startSelectedDate) {
    //         this.renderer.addClass(element, 'range-day-marker-start');
    //       } else if (dateInMs === endSelectedDate) {
    //         this.renderer.addClass(element, 'range-day-marker-end');
    //       } else {
    //         // NOTHING
    //       }
    //     }
    //   });
    // });
  }

  trackByFn(index, day: CalendarDay): number {
    return day?.dateInMs;
  }
}
