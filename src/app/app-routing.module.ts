import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { DataInsertionComponent } from './main/data-insertion/data-insertion.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'insert', component: DataInsertionComponent}
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
