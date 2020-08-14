import { NgModule } from '@angular/core';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CalendarComponent } from './datepicker/components/calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { DaysComponent } from './datepicker/components/days/days.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DatepickerComponent, CalendarComponent, DaysComponent],
  exports: [DatepickerComponent],
})
export class DatepickerModule {}
