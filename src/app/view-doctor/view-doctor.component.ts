import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';


@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {


getdc;
  constructor(private docService : DoctorService) { }

  ngOnInit() {
    this.docService.getDoctor().subscribe((response) => {
      this.getdc =response;
    })
    
  }

}
