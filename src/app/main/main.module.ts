import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {StatisticsService} from "./statistics.service";
import {ComponentsModule} from "../components/components.module";
import {SharedModule} from "../shared.module";
import {ChartsService} from "./charts.service";
import { DashboardModule } from './dashboard/dashboard.module';
import { DataInsertionModule } from './data-insertion/data-insertion.module';
import { CorrelacaoRegressaoComponent } from './correlacao-regressao/correlacao-regressao.component';
import { DistribuicaoUniformeComponent } from './distribuicao-uniforme/distribuicao-uniforme.component';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    DashboardModule,
    DataInsertionModule

  ],
  declarations: [MainComponent, CorrelacaoRegressaoComponent, DistribuicaoUniformeComponent],
  exports: [ MainComponent ],
  providers: [ StatisticsService, ChartsService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule { }
