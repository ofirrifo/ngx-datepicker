import { Component } from '@angular/core';
import { IDate } from '../../projects/datepicker/src/lib/datepicker/models/date.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-datepicker';
  selectedDate: string;

  selectionChanged({ data: date }: { data: IDate }): void {
    this.selectedDate = `${date.day}/${date.month}/${date.year}`;
  }
}
