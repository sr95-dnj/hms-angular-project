import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http : HttpClient) { }

  url = "http://localhost:3000/doctors";

  createNewDoctor(data) {
    this.http.post(this.url, {
      joindate: data.joindate,
      name: data.name,
      dob: data.dob,
      specialist: data.specialist,
      address: data.address,
      email: data.email,
      password: data.password,
      mobile: data.mobile,
      jobid: data.jobid,
      comment: data.comment
    }).toPromise();
  }
  getDoctor(){
    return this.http.get(this.url);
  }
  updateDoctor(doctor) {
    return this.http.put(this.url + '/' + doctor.id, doctor);
  }
  deleteDoctor(doctor) {
    return this.http.delete(this.url + '/' + doctor.id)
  }

}
