import { getDateInMs, getDaysInMonth, getNowDate, getTheFirstDayOfMonth } from './date.utils';
import { CalendarDay } from '../models/calendar-day.interface';

export function createCalendarDays(year: number, month: number, selectedDate: any): CalendarDay[] {
  const days: CalendarDay[] = [];
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getTheFirstDayOfMonth(year, month);

  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push({
      value: null,
      dateInMs: null,
    });
  }
  for (let i = 1; i < daysInMonth + 1; i++) {
    const dateInMs = getDateInMs(year, month, i);
    const selectedDateInMs = selectedDate ? getDateInMs(selectedDate.year, selectedDate.month, selectedDate.day) : void 0;
    const nowDate = getNowDate();
    const today = getDateInMs(nowDate.year, nowDate.month, nowDate.day);
    let classStyle = dateInMs === today ? 'today' : '';
    classStyle += dateInMs === selectedDateInMs ? ' selected' : '';
    days.push({
      value: i,
      dateInMs,
      class: classStyle,
    });
  }
  return days;
}
