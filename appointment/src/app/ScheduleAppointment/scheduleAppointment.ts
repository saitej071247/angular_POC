import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router,ActivatedRoute} from "@angular/router";
import {ApiService} from "../service/api.service";
@Component({
  selector: 'schedule-Appointment',
  templateUrl: './scheduleAppointment.html',
  styleUrls: ['./scheduleAppointment.component.css']
})
export class ScheduleAppointmentComponent implements OnInit {
public userId :any;
public buttonText='Add';
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService,private route: ActivatedRoute) { }

  addForm : FormGroup
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      appointmentSlot: ['', Validators.required],
      memberId: ['', Validators.required],
      facilityId: ['', Validators.required]

    })
    if (this.route.snapshot.paramMap.get('id')) {
      this.buttonText='Reschedule'
      this.userId = this.route.snapshot.paramMap.get('id');
      this.apiService.getAppointments().subscribe(data => {
        data.map((item)=>{
          if (item.id==this.userId){
            console.log(item)
            this.addForm.patchValue({
              appointmentSlot :item.appointmentSlot,
              memberId :item.memberId,
              facilityId:item.facilityId
            });
          }
               })
      })
    }
  }

  onSubmit() {
    if(this.userId){
      this.apiService.updateAppointment(this.addForm.value,this.userId).subscribe(data=>{
     //  this.router.navigate(['users']);
      })
    }else{
      this.apiService.addAppointment(this.addForm.value).subscribe(data=>{
       // this.router.navigate(['users']);
      })
    }
   
  }

}
