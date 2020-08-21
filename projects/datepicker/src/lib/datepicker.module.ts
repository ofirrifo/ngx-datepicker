import { NgModule } from '@angular/core';
import { DatepickerComponent } from './datepicker/datepicker/datepicker.component';
import { CommonModule } from '@angular/common';
import { CalendarDaysComponent } from './datepicker/calendar-components/calendar-days/calendar-days.component';
import { WeekDaysHeaderComponent } from './datepicker/calendar-components/week-days-header/week-days-header.component';
import { CalendarHeaderComponent } from './datepicker/calendar-components/calendar-header/calendar-header.component';
import { CalendarFooterComponent } from './datepicker/calendar-components/calendar-footer/calendar-footer.component';
import { CalendarComponent } from './datepicker/calendar-components/calendar/calendar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DatepickerComponent,
    CalendarDaysComponent,
    WeekDaysHeaderComponent,
    CalendarHeaderComponent,
    CalendarFooterComponent,
    CalendarComponent,
  ],
  exports: [DatepickerComponent],
})
export class DatepickerModule {}
