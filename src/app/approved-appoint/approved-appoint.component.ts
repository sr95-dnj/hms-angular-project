import { Component, OnInit } from '@angular/core';
import { ApointmentService } from '../apointment.service';
import { DoctorService } from '../doctor.service';
import { ReceptionsService } from '../receptions.service';

@Component({
  selector: 'app-approved-appoint',
  templateUrl: './approved-appoint.component.html',
  styleUrls: ['./approved-appoint.component.css']
})
export class ApprovedAppointComponent implements OnInit {
getApproved;
doctor;
receptions;

total:"3000";


invoiceObj={
  name : '',
  address : '',
  mobile : '',
  total: ''
}

admitObj={
  name : '',
  address: '',
  blood: '',
  gurdian: '',
  doctor: '',
  reception: '',
  email: '',
  mobile: '',

}


  constructor(private appSer : ApointmentService, private payService : ReceptionsService, private docService : DoctorService) { }

  ngOnInit() {
    
    this.getLatestApprove();
    this.approveAppoint;
    this.admitObj;

    this.getDoctor();
    this.getReception();


  }

  createAdmit(admit){
    this.admitObj=admit;
    this.payService.createAdmit(this.admitObj);

  }

  getLatestApprove(){
    this.appSer.getApprovedApoint().subscribe((response) => {
      this.getApproved = response;
    })
  }

  approveAppoint(valuee){
    this.invoiceObj=valuee;
    
   
  }

  createPayment(val){
    this.invoiceObj=val;
    this.payService.newPayment(this.invoiceObj);
    alert("Payment Successfull")
  }

  deleteApproveApoint(data){
    this.appSer.deleteApproveApoint(data).subscribe(()=> {
      this.getLatestApprove();
    })
  }

  getDoctor(){
    this.docService.getDoctor().subscribe((response)=> {
      this.doctor = response;
    })
  }

  getReception(){
    this.payService.getReception().subscribe((response) => {
      this.receptions = response;
    })
  }

}
