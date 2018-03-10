import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {StatisticsService} from "./statistics.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent],
  exports: [ MainComponent ],
  providers: [ StatisticsService ]
})
export class MainModule { }
