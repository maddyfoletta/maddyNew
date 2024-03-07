import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  selectedDate1: string = "";
  selectedDate2: string = "";

  constructor() {}

  onDate1Selected(selectedDateTime: string) {
    this.selectedDate1 = selectedDateTime;
  }

  onDate2Selected(selectedDateTime: string) {
    this.selectedDate2 = selectedDateTime;
  }

  getSleepTimes() {
    console.log("Selected Date 1:", this.selectedDate1);
    console.log("Selected Date 2:", this.selectedDate2);
  }
}


