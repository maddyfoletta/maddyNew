import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sleepy-level',
  templateUrl: './sleepy-level.component.html',
  styleUrls: ['./sleepy-level.component.scss'],
})
export class SleepyLevelComponent implements OnInit {
	@Output() levelS = new EventEmitter<string>();
  selectedItem: number= 1;
  level: string = "";



  feeling: string[] = [
	'Feeling active, vital, alert, or wide awake', //1
	'Functioning at high levels, but not at peak; able to concentrate', //2
	'Awake, but relaxed; responsive but not fully alert', //3
	'Somewhat foggy, let down', //4
	'Foggy; losing interest in remaining awake; slowed down', //5
	'Sleepy, woozy, fighting sleep; prefer to lie down', //6
	'No longer fighting sleep, sleep onset soon; having dream-like thoughts']

  constructor() { }

  ngOnInit() {}

  onSelectChange(event: CustomEvent){
    const level = event.detail.value;
    console.log(level);
	  this.levelS.emit(level);
  }



}
