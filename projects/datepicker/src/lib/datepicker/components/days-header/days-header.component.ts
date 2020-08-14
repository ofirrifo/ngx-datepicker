import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDate } from '../../models/date.interface';
import { OutputEventInterface } from '../../models/output-event.interface';

@Component({
  selector: 'ngx-days-header',
  templateUrl: './days-header.component.html',
  styleUrls: ['./days-header.component.scss'],
})
export class DaysHeaderComponent {
  @Input() currentViewDate: IDate;
  @Output() showToday = new EventEmitter<OutputEventInterface<void>>();
  @Output() prevMonth = new EventEmitter<OutputEventInterface<void>>();
  @Output() nextMonth = new EventEmitter<OutputEventInterface<void>>();
}
