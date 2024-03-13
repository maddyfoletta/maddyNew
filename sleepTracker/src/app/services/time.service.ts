import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  //March 3, 2024 - 11:36:00
  //2024-03-07T23:36:00
  months = {
    0o1: 'January',
    0o2: 'February',
    0o3: 'March',
    0o4: 'April',
    0o5: 'May',
    0o6: 'June', 
    0o7: 'July',
    8: 'August', 
    9: 'September',
  }


  parseId(date: string){
    return date.substring(5, 10);
  }

}
