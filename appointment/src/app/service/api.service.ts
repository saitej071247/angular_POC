import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Appointments } from '../model/Appointment.model';
import { Observable} from 'rxjs/index';
import { inject } from '@angular/core/testing';

@Injectable()
export class ApiService {

    constructor( private http : HttpClient){}
    baseUrl: string = 'https://appointmentserviceapp-1591774967422.azurewebsites.net/getAppointments/222205';
    postURl = 'http://localhost:3000/scheduleAppointment/'

    getUsers() : Observable<any>{
        return this.http.get<any>(this.baseUrl)
    }

    addAppointment(Appointment) :Observable<any>{
        let body = {
            "memberId": Appointment.memberId,
            "appointmentSlot": Appointment.appointmentSlot,
            "facilityId": Appointment.facilityId
        };
            let headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': "7457hhg988",
                "X-correlationid": '2342342',
            });
       
        return this.http.post<any>(this.postURl, body, { headers: headers })

    }
    // editUser(id:any) :Observable<ApiResponse>{
    //     return this.http.get<ApiResponse>(this.baseUrl + id)
  
    // }
    // updateUser(user:User) :Observable<ApiResponse>{
    //     return this.http.put<ApiResponse>(this.baseUrl + user.id,user)
  
    // }
    // deleteUser(id:any) :Observable<ApiResponse>{
    //     return this.http.get<ApiResponse>(this.deleteUrl + id)
  
    // }

}