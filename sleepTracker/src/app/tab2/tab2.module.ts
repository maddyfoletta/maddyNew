import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MonthDayComponent } from './month-day/month-day.component';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { SleepyLevelComponent } from './sleepy-level/sleepy-level.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, MonthDayComponent, SleepyLevelComponent]
})
export class Tab2PageModule {}
