import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { nanoid } from 'nanoid';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  selectedDate1: string = "";
  selectedDate2: string = "";

  constructor(private firebase: FirebaseService,
    private time: TimeService ) {}

  onDate1Selected(selectedDateTime: string) {
    this.selectedDate1 = selectedDateTime;
  }

  onDate2Selected(selectedDateTime: string) {
    this.selectedDate2 = selectedDateTime;
  }

  getSleepTimes() {
    if (this.selectedDate2 != ""){
      const newId = this.time.parseId(this.selectedDate2);
     // console.log(newId);
      this.firebase.writeTimesWithId(newId, this.selectedDate1, this.selectedDate2);
    }
   

    //console.log(this.firebase.getLogTimes("log1"));
    console.log("Selected Date 1:", this.selectedDate1);
    console.log("Selected Date 2:", this.selectedDate2);

  }
}


