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
      id:[],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]

    })
    if (this.route.snapshot.paramMap.get('id')) {
      // this.buttonText='Update'
      // this.userId = this.route.snapshot.paramMap.get('id');
      // this.apiService.editUser(this.userId).subscribe(data => {
      //   this.addForm.setValue(data.data);
      // })
    }
  }

  onSubmit() {
    // if(this.userId){
    //   this.apiService.updateUser(this.addForm.value).subscribe(data=>{
    //    this.router.navigate(['users']);
    //   })
    // }else{
    //   this.apiService.addUser(this.addForm.value).subscribe(data=>{
    //     this.router.navigate(['users']);
    //   })
    // }
   
  }

}
