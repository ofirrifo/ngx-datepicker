import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { IDate } from '../models/date.interface';
import { OutputEventInterface } from '../models/output-event.interface';
import { CalendarDay } from '../models/calendar-day.interface';
import { getDate, getDateInMs, getNowDate } from '../utils/date.utils';
import { createCalendarDays } from '../utils/calendar-days.utils';

@Component({
  selector: 'ngx-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent implements OnInit, OnChanges {
  @Input() value: Date;
  @Output() selectionChanged = new EventEmitter<OutputEventInterface<IDate>>();

  days: CalendarDay[] = [];
  currentViewDate: IDate = getNowDate();
  selectedDate;

  readonly today = getDateInMs(this.currentViewDate.year, this.currentViewDate.month, this.currentViewDate.day);

  ngOnInit(): void {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      this.init();
    }
  }

  init(): void {
    if (this.value) {
      const selectedDate = getDate(this.value);
      this.selectedDate = {
        dateInMs: this.value.getTime(),
        ...selectedDate,
      };
    }
    this.createDays(this.currentViewDate.year, this.currentViewDate.month);
  }

  updateSelected({ event, data: calendarDay }: { event: MouseEvent; data: CalendarDay }): void {
    const selectedDate = getDate(new Date(calendarDay.dateInMs));
    this.selectedDate = {
      dateInMs: calendarDay.dateInMs,
      ...selectedDate,
    };
    this.createDays(this.currentViewDate.year, this.currentViewDate.month);
    this.selectionChanged.emit({ event, data: selectedDate });
  }

  prevMonth({ event }: { event: MouseEvent }): void {
    if (this.currentViewDate.month === 1) {
      this.currentViewDate.month = 12;
      this.currentViewDate.year--;
    } else {
      this.currentViewDate.month--;
    }

    this.createDays(this.currentViewDate.year, this.currentViewDate.month);
  }

  nextMonth({ event }: { event: MouseEvent }): void {
    if (this.currentViewDate.month === 12) {
      this.currentViewDate.month = 1;
      this.currentViewDate.year++;
    } else {
      this.currentViewDate.month++;
    }
    this.createDays(this.currentViewDate.year, this.currentViewDate.month);
  }

  showToday({ event }: { event: MouseEvent }): void {
    this.currentViewDate = getNowDate();
    this.createDays(this.currentViewDate.year, this.currentViewDate.month);
  }

  showSelected(): void {
    this.currentViewDate = {
      year: this.selectedDate.year,
      month: this.selectedDate.month,
      day: this.selectedDate.day,
    };
    this.createDays(this.selectedDate.year, this.selectedDate.month);
  }

  clear(): void {
    this.selectedDate = null;
    this.createDays(this.currentViewDate.year, this.currentViewDate.month);
  }

  createDays(year: number, month: number): void {
    this.days = createCalendarDays(year, month, this.selectedDate);
  }
}
