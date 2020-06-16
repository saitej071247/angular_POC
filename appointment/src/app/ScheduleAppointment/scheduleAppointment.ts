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
          var testDate=new Date(item.appointmentSlot);
            this.addForm.patchValue({
              appointmentSlot: testDate.toISOString().slice(0,16),
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
    if (data.statusCode!=200){
      alert(data.Message);
    }else{
      alert("Rescheduled Successfully");
    }
      })
    }else{
      console.log(this.addForm.value.appointmentSlot);
      this.apiService.addAppointment(this.addForm.value).subscribe(data=>{
       // this.router.navigate(['users']);
      })
    }
   
  }

}
