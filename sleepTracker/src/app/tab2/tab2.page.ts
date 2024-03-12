import { Component } from '@angular/core';
import { FirebaseApp } from 'firebase/app';
import { FirebaseService } from '../services/firebase.service';

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

  constructor(private firebase: FirebaseService) {}

  logLevel(){
    console.log("works");
    console.log("ONE: " + this.selectedDate);
    console.log("TWO: " + this.level);
  }

}
