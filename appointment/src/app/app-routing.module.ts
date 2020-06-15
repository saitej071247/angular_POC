import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAppointmentComponent} from './app.component';
import { ScheduleAppointmentComponent} from './ScheduleAppointment/scheduleAppointment'

const routes: Routes = [
  { path: 'users', component: ListAppointmentComponent },
  { path:'add',component:ScheduleAppointmentComponent}
 // { path:'edit/:id',component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

