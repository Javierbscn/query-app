import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllBusinessComponent } from './components/all-business/all-business.component';
import { OneBusinessComponent } from './components/one-business/one-business.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBusinessComponent,
    OneBusinessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
