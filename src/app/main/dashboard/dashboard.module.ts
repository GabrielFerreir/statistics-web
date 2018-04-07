import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import {SharedModule} from "../../shared.module";
import {ComponentsModule} from "../../components/components.module";

import {StatisticsService} from "../statistics.service";
import {ChartsService} from "../charts.service";




@NgModule({
  imports: [
    SharedModule,
    ComponentsModule
  ],
  declarations: [DashboardComponent],
  providers: [ StatisticsService, ChartsService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule { }
