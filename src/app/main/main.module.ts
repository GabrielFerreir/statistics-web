import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {StatisticsService} from "./statistics.service";
import {ComponentsModule} from "../components/components.module";
import {SharedModule} from "../shared.module";
import {ChartsService} from "./charts.service";

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule
  ],
  declarations: [MainComponent],
  exports: [ MainComponent ],
  providers: [ StatisticsService, ChartsService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule { }
