import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";

import { AppComponent } from './app.component';
import { AllBusinessComponent } from './components/all-business/all-business.component';
import { OneBusinessComponent } from './components/one-business/one-business.component';
import { SalesService } from './services/sales.service';

import { environment } from "./../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    AllBusinessComponent,
    OneBusinessComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [SalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
