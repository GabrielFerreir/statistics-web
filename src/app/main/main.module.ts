import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { MainComponent } from './main.component';
import {StatisticsService} from "./statistics.service";
import {ComponentsModule} from "../components/components.module";
import {SharedModule} from "../shared.module";
import { DashboardModule } from './dashboard/dashboard.module';
import { DataInsertionModule } from './data-insertion/data-insertion.module';
import { DistribuicaoUniformeComponent } from './distribuicao-uniforme/distribuicao-uniforme.component';
import {CorrelacaoRegressaoModule} from './correlacao-regressao/correlacao-regressao.module';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    DashboardModule,
    DataInsertionModule,
    CorrelacaoRegressaoModule
  ],
  declarations: [MainComponent, DistribuicaoUniformeComponent],
  exports: [ MainComponent ],
  providers: [ StatisticsService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule { }
