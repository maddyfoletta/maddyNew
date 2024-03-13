import { Injectable } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get, child, update, remove, onValue } from 'firebase/database';
import { CustomDate } from './CustomDate';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// https://inf-133-a4-bfa70-default-rtdb.firebaseio.com/

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  firebaseConfig = {
  apiKey: "AIzaSyCu-1YwmY33srwuueHjBJdfFAjGRiIEU1c",
  authDomain: "inf-133-a4-bfa70.firebaseapp.com",
  databaseURL: "https://inf-133-a4-bfa70-default-rtdb.firebaseio.com",
  projectId: "inf-133-a4-bfa70",
  storageBucket: "inf-133-a4-bfa70.appspot.com",
  messagingSenderId: "297396992170",
  appId: "1:297396992170:web:85d1c638e2774f6c7b78d3",
  measurementId: "G-TFQQP0VMXQ"
};


  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);
  db = getDatabase();

  
  async getLogTimes(logId: string) {
    try {
      const snapshot = await get(child(ref(this.db), logId));
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log(`${logId} does not exist`);
        return null;
      }
    } catch (error) {
      console.error("Error getting log:", error);
      return null;
    }
  }

  async writeTimesWithId(id: string, startTime: string, endTime: string) {
    try {
      const path = `sleepLogs/${id}`;
      const data = {
        start: startTime,
       end: endTime
      };
      console.log("made it here");

      // Write the data to the specified path in the database
      await set(ref(this.db, path), data);
      
      console.log('Times written successfully!');
    } catch (error) {
      console.error('Error writing times:', error);
    }
  }

  async writeLevelToDate(id: string, level: string) {
    try {
      const parentNode = `sleepLogs/${id}`;
      const newData = {
        'sleepLevel': level
      };
      const parentNodeRef = ref(this.db, parentNode);
  
      await update(parentNodeRef, newData);
      console.log('Node added successfully to', parentNode);
    } catch (error) {
      console.error('Error adding node:', error);
    }
  }

  fetchLogs(path: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const db = getDatabase();
      const logsRef = ref(db, path);

      onValue(logsRef, (snapshot) => {
        const data = snapshot.val();
        const logs = [];
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            logs.push(data[key]);
          }
        }
        resolve(logs);
      }, (error) => {
        reject(error);
      });
    });
  }


}
