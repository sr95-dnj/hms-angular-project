import { Component, OnInit } from '@angular/core';
import { ApointmentService } from '../apointment.service';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
getData;
  constructor(private appointmentService : ApointmentService, private doctorService : DoctorService) { }

  ngOnInit() {
    this.doctorService.getDoctor().subscribe((response) =>{
      this.getData = response;
    })
  }
  createAppointment(data) {
    this.appointmentService.createAppointment(data);
  }


}
