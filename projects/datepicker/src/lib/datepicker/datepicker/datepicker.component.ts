import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { getDate, getDateInMs, getNowDate } from '../date.utils';
import { createCalendarDays } from '../utils/calendar-days.utils';
import { CalendarDay } from '../models/calendar-day.interface';
import { IDate } from '../models/date.interface';

@Component({
  selector: 'ngx-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent implements OnInit {
  days: CalendarDay[] = [];
  currentViewDate: IDate = getNowDate();
  selectedDate;
  hidePrevAndNextDays = true;
  readonly today = getDateInMs(this.currentViewDate.year, this.currentViewDate.month, this.currentViewDate.day);

  ngOnInit(): void {
    this.createDays(this.currentViewDate.year, this.currentViewDate.month);
  }

  updateSelected({ event, data: day }: { event: MouseEvent; data: CalendarDay }): void {
    this.selectedDate = {
      dateInMs: day.dateInMs,
      ...getDate(new Date(day.dateInMs)),
    };
    this.createDays(2020, this.currentViewDate.month);
  }

  prevMonth(): void {
    if (this.currentViewDate.month === 1) {
      this.currentViewDate.month = 12;
      this.currentViewDate.year--;
    } else {
      this.currentViewDate.month--;
    }

    this.createDays(2020, this.currentViewDate.month);
  }

  nextMonth(): void {
    if (this.currentViewDate.month === 12) {
      this.currentViewDate.month = 1;
      this.currentViewDate.year++;
    } else {
      this.currentViewDate.month++;
    }
    this.createDays(2020, this.currentViewDate.month);
  }

  showToday(): void {
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

  apply(): void {}

  cancel(): void {}

  createDays(year: number, month: number): void {
    this.days = createCalendarDays(year, month, this.hidePrevAndNextDays, this.selectedDate);
  }

  hover(): void {}
}
