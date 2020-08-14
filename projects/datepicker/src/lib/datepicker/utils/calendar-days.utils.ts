import { getDateInMs, getDaysInMonth, getNowDate, getTheFirstDayOfMonth } from '../date.utils';
import { CalendarDay } from '../models/calendar-day.interface';

export function createCalendarDays(year: number, month: number, hidePrevAndNextDays: boolean, selectedDate: any): CalendarDay[] {
  const days = [];
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getTheFirstDayOfMonth(year, month);

  let a = new Date(year, month - 1, -firstDayOfMonth).getDate();
  for (let i = 0; i < firstDayOfMonth; i++) {
    let classStyle = 'prev-month-day';
    classStyle += hidePrevAndNextDays ? ' hide-day' : '';
    days.push({
      value: ++a,
      isFromCurrentMonth: false,
      class: classStyle,
    });
  }
  for (let i = 1; i < daysInMonth + 1; i++) {
    const dateInMs = getDateInMs(year, month, i);
    const nowDate = getNowDate();
    const today = getDateInMs(nowDate.year, nowDate.month, nowDate.day);
    let classStyle = dateInMs === today ? 'today' : '';
    classStyle += dateInMs === selectedDate?.dateInMs ? ' selected' : '';
    days.push({
      value: i,
      dateInMs,
      isFromCurrentMonth: true,
      class: classStyle,
    });
  }
  for (let i = 1; days.length < 6 * 7; i++) {
    let classStyle = 'next-mont-day';
    classStyle += hidePrevAndNextDays ? ' hide-day' : '';
    days.push({ value: i, isFromCurrentMonth: false, class: classStyle });
  }
  return days;
}
