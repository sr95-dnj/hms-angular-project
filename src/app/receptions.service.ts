import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceptionsService {
  url = "http://localhost:3000/receptions";
  url1 = "http://localhost:3000/payment";
  url2 = "http://localhost:3000/admit";
  constructor(private http : HttpClient) { }

  createReception(data){
    this.http.post(this.url, {
      no : data.no,
      block : data.block,
      name : data.name,
      department : data.department,
      mobile : data.mobile
    }).toPromise();
  }
  getReception(){
   return this.http.get(this.url);
  }

  newPayment(data){
    this.http.post(this.url1, {
      name : data.name,
      address : data.address,
      mobile : data.mobile,
      total : data.total
    }).toPromise();
  }
  getPaymetn(){
   return this.http.get(this.url1);
  }

  createAdmit(data){
    this.http.post(this.url2, {
      name : data.name,
      address : data.address,
      blood :data.blood,
      gurdian : data.gurdian,
      doctor : data.doctor,
      reception : data.reception,
      mobile : data.mobile,
      email : data.email
    }).toPromise();
  }

  getAdmit(){
    return this.http.get(this.url2)
  }
  
}
