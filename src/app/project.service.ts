import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http : HttpClient) { }
  url = "http://localhost:3000/admin";
  loginUser(data) {
    return this.http.get(this.url);
  }


  registrationUser(data) {
    this.http.post(this.url, {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPass: data.confirmPass
    }).toPromise();
  }

  getUser() {
    return this.http.get(this.url);
  }

}


