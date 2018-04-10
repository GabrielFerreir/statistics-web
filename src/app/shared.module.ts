import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { SMNUIModule } from 'ng-smn-ui';
import {UiToolbarService} from 'ng-smn-ui';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';


@NgModule({
  exports: [
    FormsModule,
    BrowserModule,
    SMNUIModule,
    Ng2GoogleChartsModule,
    HttpModule,
    HttpClientModule,
    RouterModule
  ],

  providers: [ UiToolbarService ]
})
export class SharedModule { }
