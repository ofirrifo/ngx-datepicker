import { NgModule } from '@angular/core';
import { DatepickerComponent } from './datepicker/datepicker/datepicker.component';
import { CommonModule } from '@angular/common';
import { DaysComponent } from './datepicker/components/days/days.component';
import { WeekDaysHeaderComponent } from './datepicker/components/week-days-header/week-days-header.component';
import { DaysHeaderComponent } from './datepicker/components/days-header/days-header.component';
import { CalendarFooterComponent } from './datepicker/components/calendar-footer/calendar-footer.component';
import { CalendarComponent } from './datepicker/components/calendar/calendar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DatepickerComponent,
    DaysComponent,
    WeekDaysHeaderComponent,
    DaysHeaderComponent,
    CalendarFooterComponent,
    CalendarComponent,
  ],
  exports: [DatepickerComponent],
})
export class DatepickerModule {}
