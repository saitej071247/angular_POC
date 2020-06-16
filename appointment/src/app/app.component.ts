import { Component, OnInit,Inject } from '@angular/core';
 import {Router} from "@angular/router";
import { Appointments } from './model/Appointment.model'
import { ApiService } from './service/api.service';

@Component({
  selector: 'list-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ListAppointmentComponent implements OnInit {

  appointments : Appointments[];
  constructor (
    private apiservice : ApiService,private router: Router,) { }

  ngOnInit() {
    //get Users List
    this.apiservice.getAppointments().subscribe(data=>{
      console.log(data);
     this.appointments=data;
    })
  }

  addUser() : void {
    this.router.navigate(['add']);
  }

  editAppointment(id) {
   this.router.navigate(['/edit', id]);
  }

  cancelAppointemnt(id,memberId) {
    console.log(id)
    this.apiservice.deleteAppointment(id,memberId).subscribe(data=>{
      if (data.statusCode!=200){
        alert(data.Message);
      }else{
        alert("Rescheduled Successfully");
      }
      this.apiservice.getAppointments().subscribe(data=>{
        console.log(data);
       this.appointments=data;
      })
    })
 }
}
