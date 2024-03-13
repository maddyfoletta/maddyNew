import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { CustomDate } from 'src/app/services/CustomDate';

@Component({
  selector: 'app-log-card',
  templateUrl: './log-card.component.html',
  styleUrls: ['./log-card.component.scss'],
})
export class LogCardComponent  implements OnInit {
  logs: any[] | undefined;
  title: string ="";
  message: string = "";
  subtitle: string = "";

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
    this.fetchLogsFromFirebase();
  }

  fetchLogsFromFirebase() {
    const path = '/sleepLogs';
    this.firebase.fetchLogs(path)
      .then((logs) => {
        this.logs = logs;
        console.log(logs);
      })
      .catch((error) => {
        console.error('Error fetching logs:', error);
      });
    }


    getDate(date: string): string{
      const newD = new CustomDate(date);
      return newD.getTheDay();
    }

    getDifferenceSleepHour(date1: string, date2: string): number{
      const test = new CustomDate(date1);
      const d1 = new Date(date1);
      const d2 = new Date(date2);
      return test.getTimeDifference(d1, d2).hours;
    }

    getDifferenceSleepMinute(date1: string, date2: string): number{
      const test = new CustomDate(date1);
      const d1 = new Date(date1);
      const d2 = new Date(date2);
      return test.getTimeDifference(d1, d2).minutes;
    }
  }
