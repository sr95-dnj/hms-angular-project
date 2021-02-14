import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdmitedPatientComponent } from './admited-patient/admited-patient.component'

import { AppointmentComponent } from './appointment/appointment.component'
import { ApprovedAppointComponent } from './approved-appoint/approved-appoint.component'
import { DashbordComponent } from './dashbord/dashbord.component'
import { DoctorDashBordComponent } from './doctor-dash-bord/doctor-dash-bord.component'
import { DoctorComponent } from './doctor/doctor.component'
import { HomeComponent } from './home/home.component'
import { InvoiceComponent } from './invoice/invoice.component'
import { LoginComponent } from './login/login.component'
import { NavComponent } from './nav/nav.component'
import { NewReceptionComponent } from './new-reception/new-reception.component'
import { PaymentComponent } from './payment/payment.component'
import { ViewDoctorComponent } from './view-doctor/view-doctor.component'
import { ViewPatientComponent } from './view-patient/view-patient.component'
import { ViewReceptionsComponent } from './view-receptions/view-receptions.component'

const routes: Routes = [
    {path : "home" , component : HomeComponent},
    {path : "nav", component :NavComponent},
    { path: "dashbord", component: DashbordComponent,
        children : [{path : 'doctor', component : DoctorComponent},
            { path: 'appointment', component: AppointmentComponent },
            { path: 'view_patient', component: ViewPatientComponent },
            { path: 'admit_patient', component: AdmitedPatientComponent },
            { path: 'view_doctor', component: ViewDoctorComponent },
            { path: 'approved_apoint', component: ApprovedAppointComponent },
            { path: 'invoice', component: InvoiceComponent },
            { path: 'new_reception', component: NewReceptionComponent },
            { path: 'view_reception', component: ViewReceptionsComponent },
        { path: 'payment', component: PaymentComponent }]
        },
    { path: "apointment", component: AppointmentComponent },
    { path: "login", component: LoginComponent },
    { path: "doc_dash", component: DoctorDashBordComponent,
        children : [{path : 'app_appoint', component : ApprovedAppointComponent},
            { path: 'invoice', component: InvoiceComponent }
    
    ] }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
    
})

export class AppRoutingModule {

}