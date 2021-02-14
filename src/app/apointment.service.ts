import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApointmentService {

  url = "http://localhost:3000/appointment";
  url1 = "http://localhost:3000/approvedAppointment";

  constructor(private http : HttpClient) { }

  createAppointment(data) {
    this.http.post(this.url, {
      category : data.category,
      doctor : data.doctor,
      name: data.name,
      address: data.address,
      email: data.email,
      mobile: data.mobile
    }).toPromise();
  }

  deleteAppoint(data){
  return  this.http.delete(this.url+'/'+data.id);
  }

  hiddenAppoint(data){
    this.http.post(this.url1, {
      name : data.name,
      address : data.address,
      category : data.category,
      doctor : data.doctor,
      mobile : data.mobile,
      date : data.date
    }).toPromise();
  }

  getAppoint(){
    return this.http.get(this.url);
  }
  getApprovedApoint() {
    return this.http.get(this.url1);
  }

  deleteApproveApoint(data){
   return this.http.delete(this.url1+'/'+data.id);
  }


}
