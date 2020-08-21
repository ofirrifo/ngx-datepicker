import { IDate } from '../models/date.interface';

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

export function getNowDate(): IDate {
  const now = new Date();

  return getDate(now);
}

export function getMonth(now: Date): number {
  return now.getMonth() + 1;
}

export function getTheFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month - 1, 1).getDay();
}

export function getDateInMs(year: number, month: number, day: number): number {
  return new Date(year, month - 1, day).getTime();
}

export function getDate(date: Date): IDate {
  return {
    year: date.getFullYear(),
    month: getMonth(date),
    day: date.getDate(),
  };
}
