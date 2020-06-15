import { Component, OnInit,Inject } from '@angular/core';
 import {Router} from "@angular/router";
import { Appointments } from './model/Appointment.model'
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ListAppointmentComponent implements OnInit {

  appointments : Appointments[];
   public add = false;

  constructor (
    private apiservice : ApiService,private router: Router,) { }

  ngOnInit() {
    //get Users List
    this.apiservice.getUsers().subscribe(data=>{
      console.log(data);
     this.appointments=data;
     this.add=true;
    })
  }

  addUser() : void {
    this.add=false;
    this.router.navigate(['add']);
  }

//   editUser(id) {
//    this.router.navigate(['/edit', id]);
//   }

//   deleteUser(id) {
//     console.log(id)
//     this.apiservice.deleteUser(id).subscribe(data=>{
//       this.users = this.users.filter(u => u.id !== id);
//     })
//  }
}
