import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-month-day',
  templateUrl: './month-day.component.html',
  styleUrls: ['./month-day.component.scss'],
})
export class MonthDayComponent  implements OnInit {
  @Output() month = new EventEmitter<string>();
  showCalendar: boolean = false;
  selectedDate: string = "";


  constructor() { }

  ngOnInit() {}

  openCalendar() {
    this.showCalendar = true;
  }

  closeCalendar() {
    this.showCalendar = false;
  }

  onMonthChange(event: CustomEvent){
    this.showCalendar = false;
    const date = event.detail.value;
    console.log(date);
    this.month.emit(date);
  }

}
