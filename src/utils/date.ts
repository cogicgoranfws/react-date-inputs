import { isValid as isValidFns } from 'date-fns';
import { DateUnits } from '../types';

export function daysInMonth(month: number, year?: number): number {
  switch (month) {
    case 2:
      return !year || year.toString().length < 4
        ? 29
        : (year % 4 == 0 && year % 100) || year % 400 == 0
        ? 29
        : 28;
    case 9:
    case 4:
    case 6:
    case 11:
      return 30;
    default:
      return 31;
  }
}

export function isValid(day: number, month: number, year: number): boolean {
  const date = new Date(year, month - 1, day);
  return month >= 1 && month < 13 && day > 0 && day <= daysInMonth(month, year) && isValidFns(date);
}

export function getCappedUnits({ day, month, year }: DateUnits): DateUnits {
  const maxDays = month ? daysInMonth(month as number, year as number) : 31;

  return {
    day: day && day as number > maxDays ? maxDays : day,
    month: month && month as number > 12 ? 12 : month,
    year: year && year as number > 9999 ? 9999 : year,
  };
}
