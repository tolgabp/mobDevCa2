import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule], // Importing required modules
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }], // Providing the route reuse strategy
  bootstrap: [AppComponent],
})
export class AppModule {}