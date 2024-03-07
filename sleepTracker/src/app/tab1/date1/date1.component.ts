import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date1',
  templateUrl: './date1.component.html',
  styleUrls: ['./date1.component.scss'],
})
export class Date1Component implements OnInit {
  @Output() date1Selected = new EventEmitter<string>();

  constructor() {}

  onDateChange1(event: CustomEvent) {
    const selectedDateTime = event.detail.value;
    this.date1Selected.emit(selectedDateTime);
    console.log(selectedDateTime);
  }

  ngOnInit(){
  }


}
