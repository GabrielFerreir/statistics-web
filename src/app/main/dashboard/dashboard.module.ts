import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { DashboardComponent } from './dashboard.component';

import {SharedModule} from '../../shared.module';
import {ComponentsModule} from '../../components/components.module';

import {StatisticsService} from '../statistics.service';
import {ChartsService} from '../charts.service';
import {GraphicCollumnModule} from '../../components/graphic/graphic.module';
import {GraphicService} from '../../components/graphic/graphic.service';




@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    GraphicCollumnModule
  ],
  declarations: [DashboardComponent],
  providers: [ StatisticsService, ChartsService, GraphicService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule { }
