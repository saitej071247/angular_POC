import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointments } from '../model/Appointment.model';
import { Observable } from 'rxjs/index';
import { inject } from '@angular/core/testing';
import { TokenInfo } from '../model/api.response'

@Injectable()
export class ApiService {

    constructor(private http: HttpClient, private gttokendata: TokenInfo) { }
    URl = 'http://localhost:3000/Appointment/';
    cancelUrl = 'http://localhost:3000/cancelAppointment/';






    getAppointments(memberId: any): Observable<any> {
        return this.http.get<any>(this.URl + memberId)
    }

    addAppointment(Appointment): Observable<any> {
        var changedDate = new Date(Appointment.appointmentSlot);
        var Finaldate = changedDate.toLocaleString();
        let body = {
            "memberId": Appointment.memberId,
            "appointmentSlot": Finaldate,
            "facilityId": Appointment.facilityId
        };
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.gttokendata.provideToken(Appointment.memberId),//222204
            "X-correlationid": '2342342',
        });

        return this.http.post<any>(this.URl, body, { headers: headers })

    }
    updateAppointment(Appointment, id): Observable<any> {
        var changedDate = new Date(Appointment.appointmentSlot);
        var Finaldate = changedDate.toLocaleString();
        let body = {
            "id": id,
            "appointmentSlot": Finaldate
        };
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.gttokendata.provideToken(Appointment.memberId),
            "X-correlationid": '2342342',
        });
        return this.http.put<any>(this.URl, body, { headers: headers })

    }
    deleteAppointment(id: any, memberId): Observable<any> {
        let body = {
            "id": id,
            "memberId": memberId,
        };
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.gttokendata.provideToken(memberId),
            "X-correlationid": '2342342',
        });
        return this.http.put<any>(this.cancelUrl, body, { headers: headers })

    }

}