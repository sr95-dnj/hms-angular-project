import { Component, OnInit } from '@angular/core';
import { ReceptionsService } from '../receptions.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
payAll;

public total : "3000";
  constructor(private payList : ReceptionsService) { }

  ngOnInit() {
    this.payList.getPaymetn().subscribe((response) => {
      this.payAll=response;
    })
  }
 
}
