import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IDate } from '../../models/date.interface';
import { OutputEventInterface } from '../../models/output-event.interface';

@Component({
  selector: 'ngx-years-header',
  templateUrl: './years-header.component.html',
  styleUrls: ['./years-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearsHeaderComponent {
  @Input() currentViewDate: IDate;
  @Output() prevClicked = new EventEmitter<OutputEventInterface<void>>();
  @Output() nextClicked = new EventEmitter<OutputEventInterface<void>>();
  @Output() changeViewClicked = new EventEmitter<OutputEventInterface<void>>();
}
