import { Component, OnInit } from '@angular/core';
import { ReceptionsService } from '../receptions.service';

@Component({
  selector: 'app-view-receptions',
  templateUrl: './view-receptions.component.html',
  styleUrls: ['./view-receptions.component.css']
})
export class ViewReceptionsComponent implements OnInit {

  constructor(private receptionService : ReceptionsService) { }
allReception;
  ngOnInit() {
    this.receptionService.getReception().subscribe((response) => {
      this.allReception =response;
    })
  }

}
