import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {MainModule} from "./main/main.module";
import {SharedModule} from "./shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {ComponentsModule} from "./components/components.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MainModule,
    ComponentsModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
