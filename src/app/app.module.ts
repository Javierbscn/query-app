import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { AllBusinessComponent } from './components/all-business/all-business.component';
import { OneBusinessComponent } from './components/one-business/one-business.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SalesService } from './services/sales.service';

import { environment } from "./../environments/environment";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empresas', component: AllBusinessComponent },
  { path: 'empresas/:nombre_empresa', component: OneBusinessComponent },
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    AllBusinessComponent,
    OneBusinessComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [SalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
