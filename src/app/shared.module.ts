import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { SMNUIModule, UiToolbarService } from 'ng-smn-ui';

@NgModule({
  exports: [
    FormsModule,
    BrowserModule,
    SMNUIModule,
    HttpModule,
    HttpClientModule,
    RouterModule
  ],

  providers: [ UiToolbarService ]
})
export class SharedModule { }
