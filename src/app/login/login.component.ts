import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username ="admin";
password = "admin";
status;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  adminLogin(){
    if(this.username=="admin" && this.password=="admin"){
      this.router.navigate(['/dashbord'])
    }else{
      this.status = "Login Failed"
    }
  }

}
