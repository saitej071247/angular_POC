import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Appointments } from './model/Appointment.model'
import { ApiService } from './service/api.service';
@Component({
  selector: 'list-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ListAppointmentComponent implements OnInit {

  appointments: Appointments[];
  public memberId: any;
  constructor(
    private apiservice: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //get Users List
    this.memberId = this.route.snapshot.paramMap.get('memberId');
    this.apiservice.getAppointments(this.memberId).subscribe(data => {
      console.log(data);
      this.appointments = data;
    })
  }

  addUser(): void {
    this.router.navigate(['add']);
  }

  editAppointment(id, memberId) {
    this.router.navigate(['edit', id, memberId]);

  }

  cancelAppointemnt(id, memberId) {
    if (confirm('Are you sure you want to cancel the appointment?')) {
      this.apiservice.deleteAppointment(id, memberId).subscribe(data => {
        if (data.statusCode != 200) {
          alert(data.Message);
        } else {
          alert("Cancelled Successfully");
          this.router.navigate(['users', memberId]);
          this.apiservice.getAppointments(memberId).subscribe(data => {
            this.appointments = data;
          })
        }
      })
    } else {
      alert("Appointment is Safe");
    }

  }
}
