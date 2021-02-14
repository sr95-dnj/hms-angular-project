import { Component, OnInit } from '@angular/core';
import { ReceptionsService } from '../receptions.service';

@Component({
  selector: 'app-admited-patient',
  templateUrl: './admited-patient.component.html',
  styleUrls: ['./admited-patient.component.css']
})
export class AdmitedPatientComponent implements OnInit {
admited;
  constructor(private addService : ReceptionsService) { }

  ngOnInit() {
    this.addService.getAdmit().subscribe((response) => {
      this.admited=response;
    })
  }

}
