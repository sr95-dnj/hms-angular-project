import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LoginComponent } from './login/login.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { AdmitedPatientComponent } from './admited-patient/admited-patient.component';
import { RejectedAppointListComponent } from './rejected-appoint-list/rejected-appoint-list.component';
import { ApprovedAppointComponent } from './approved-appoint/approved-appoint.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { DoctorDashBordComponent } from './doctor-dash-bord/doctor-dash-bord.component';
import { NewReceptionComponent } from './new-reception/new-reception.component';
import { ViewReceptionsComponent } from './view-receptions/view-receptions.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DashbordComponent,
    AppointmentComponent,
    DoctorComponent,
    LoginComponent,
    ViewDoctorComponent,
    ViewPatientComponent,
    AdmitedPatientComponent,
    RejectedAppointListComponent,
    ApprovedAppointComponent,
    InvoiceComponent,
    DoctorDashBordComponent,
    NewReceptionComponent,
    ViewReceptionsComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
