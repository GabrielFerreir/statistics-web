import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { DataInsertionComponent } from './main/data-insertion/data-insertion.component';
import {CorrelacaoRegressaoComponent} from './main/correlacao-regressao/correlacao-regressao.component';
import {DistribuicaoUniformeComponent} from './main/distribuicao-uniforme/distribuicao-uniforme.component';
import {ResponseComponent} from './main/correlacao-regressao/response/response.component';
import {DistribuicaoBinomialComponent} from './main/distribuicao-binomial/distribuicao-binomial.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'insert', component: DataInsertionComponent},
      {
        path: 'correlacao-regressao',
        children: [
          {path: '', component: CorrelacaoRegressaoComponent},
          {path: 'response', component: ResponseComponent}
        ]
      },
      {path: 'distribuicao-uniforme', component: DistribuicaoUniformeComponent},
      {path: 'distribuicao-binomial', component: DistribuicaoBinomialComponent},
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
