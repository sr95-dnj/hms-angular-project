import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private docService : DoctorService) { }



  ngOnInit() {
  }
  newDoctor(data){
    this.docService.createNewDoctor(data);
  }



 

  
}
