import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date2',
  templateUrl: './date2.component.html',
  styleUrls: ['./date2.component.scss'],
})
export class Date2Component  implements OnInit {
  @Output() date2Selected = new EventEmitter<string>();


  onDateChange2(event: CustomEvent) {
    const selectedDateTime = event.detail.value;
    this.date2Selected.emit(selectedDateTime);
   // console.log(selectedDateTime);
  }

  constructor() { }

  ngOnInit() {}

}
