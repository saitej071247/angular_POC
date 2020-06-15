
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ListAppointmentComponent } from './app.component';
import { ApiService } from './service/api.service';
import { ScheduleAppointmentComponent } from './ScheduleAppointment/scheduleAppointment';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ListAppointmentComponent,
    ScheduleAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [ApiService],
  bootstrap: [ListAppointmentComponent]
})
export class AppModule { }

