import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acknowledgement',
  templateUrl: './acknowledgement.component.html',
  styleUrls: ['./acknowledgement.component.css']
})
export class AcknowledgementComponent implements OnInit {
  message: string;

  constructor() { }
  
  ngOnInit(): void {
    this.message = sessionStorage.getItem("confirmation");
  }

}
