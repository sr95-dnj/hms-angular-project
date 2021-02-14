import { Component, OnInit } from '@angular/core';
import { ApointmentService } from '../apointment.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {
approveObj={
  name : '',
  address : '',
  category : '',
  doctor : '',
  mobile : '',
  date : ''
}

dateObj={
date : ''
}

  constructor(private appointmentService : ApointmentService) { }
appData;

  ngOnInit() {
    this.getLatestAppoint();
    this.approveAppoint;
  }

  getLatestAppoint(){
    this.appointmentService.getAppoint().subscribe((response) => {
      this.appData = response;
     


    })
  }
  approveAppoint(approve){
    
    this.approveObj=approve;
    this.appointmentService.hiddenAppoint(this.approveObj);
    alert("Appointment Approve Successfull")
  
  }
  
  deleteApp(data){
    this.appointmentService.deleteAppoint(data).subscribe(() => {
      this.getLatestAppoint();
    })
  }

}
