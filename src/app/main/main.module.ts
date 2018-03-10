import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {StatisticsService} from "./statistics.service";
import {ComponentsModule} from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [MainComponent],
  exports: [ MainComponent ],
  providers: [ StatisticsService ]
})
export class MainModule { }
