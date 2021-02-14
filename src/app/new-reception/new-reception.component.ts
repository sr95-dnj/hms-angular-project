import { Component, OnInit } from '@angular/core';
import { ReceptionsService } from '../receptions.service';

@Component({
  selector: 'app-new-reception',
  templateUrl: './new-reception.component.html',
  styleUrls: ['./new-reception.component.css']
})
export class NewReceptionComponent implements OnInit {

  constructor(private receptionService : ReceptionsService) { }

  ngOnInit() {
  }
  newReception(data){
    this.receptionService.createReception(data);
  }

}
