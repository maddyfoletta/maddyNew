import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

//pickers
export class Tab3Page implements OnInit{
  logs: any[] | undefined;
  constructor(private firebase: FirebaseService) {}

  ngOnInit(){
    this.fetchLogsFromFirebase();
  }

  fetchLogsFromFirebase() {
    const path = '/sleepLogs'; // Specify your Firebase path here
    this.firebase.fetchLogs(path)
      .then((logs) => {
        this.logs = logs;
        console.log(logs);
      })
      .catch((error) => {
        console.error('Error fetching logs:', error);
      });
    }

    handleRefresh(){
      window.location.reload();
    }
}
