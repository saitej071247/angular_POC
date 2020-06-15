import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointments } from '../model/Appointment.model';
import { Observable} from 'rxjs/index';
import { inject } from '@angular/core/testing';

@Injectable()
export class ApiService {

    constructor( private http : HttpClient){}
    baseUrl: string = 'https://appointmentserviceapp-1591774967422.azurewebsites.net/getAppointments/222205';
    deleteUrl: string = 'http://localhost:8080/deleteUser/';

    getUsers() : Observable<any>{
        return this.http.get<any>(this.baseUrl)
    }

    // addUser(user:User) :Observable<ApiResponse>{
    //     return this.http.post<ApiResponse>(this.baseUrl,user)

    // }
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