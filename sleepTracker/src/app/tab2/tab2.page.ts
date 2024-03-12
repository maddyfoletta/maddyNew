import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  selectedDate: string = "";
  level: string = "";

  onDateSelected(selectedMonth: string) {
    this.selectedDate = selectedMonth;
  }

  getSL(selectedLevel: string){
    this.level = selectedLevel;
  }

  constructor(private firebase: FirebaseService,
    private timeS: TimeService) {}

  logLevel(){
    const newD = this.timeS.parseId(this.selectedDate);
    this.firebase.writeLevelToDate(newD, this.level);
    console.log("works");
    console.log("ONE: " + this.selectedDate);
    console.log("TWO: " + this.level);
  }

}
