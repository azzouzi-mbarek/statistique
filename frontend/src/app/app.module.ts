import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MapsModule } from './maps/maps.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StatisticComponent } from './landing/statistic/statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
   BrowserAnimationsModule,
    NgxChartsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LandingModule,
    HttpClientModule,
    AuthModule,
    AdminModule,
    MapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
