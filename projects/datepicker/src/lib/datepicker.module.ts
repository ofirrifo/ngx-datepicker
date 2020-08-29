import { NgModule } from '@angular/core';
import { DatepickerComponent } from './datepicker/datepicker/datepicker.component';
import { CommonModule } from '@angular/common';
import { CalendarDaysComponent } from './datepicker/calendar-components/calendar-days/calendar-days.component';
import { CalendarHeaderComponent } from './datepicker/calendar-components/calendar-header/calendar-header.component';
import { CalendarFooterComponent } from './datepicker/calendar-components/calendar-footer/calendar-footer.component';
import { CalendarComponent } from './datepicker/calendar-components/calendar/calendar.component';
import { CalendarWeekDaysComponent } from './datepicker/calendar-components/calendar-week-days/calendar-week-days.component';
import { YearsViewComponent } from './datepicker/year-components/years-view/years-view.component';
import { YearsHeaderComponent } from './datepicker/year-components/years-header/years-header.component';
import { YearsComponent } from './datepicker/year-components/years/years.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DatepickerComponent,
    CalendarDaysComponent,
    CalendarHeaderComponent,
    CalendarFooterComponent,
    CalendarComponent,
    CalendarWeekDaysComponent,
    YearsViewComponent,
    YearsHeaderComponent,
    YearsComponent,
  ],
  exports: [DatepickerComponent],
})
export class DatepickerModule {}
