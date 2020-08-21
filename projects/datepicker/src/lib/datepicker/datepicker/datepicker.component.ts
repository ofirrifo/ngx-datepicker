import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';
import { IDate } from '../models/date.interface';
import { OutputEventInterface } from '../models/output-event.interface';

@Component({
  selector: 'ngx-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent {
  @Output() selectionChanged = new EventEmitter<OutputEventInterface<IDate>>();
}
