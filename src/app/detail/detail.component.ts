import { Component, OnInit } from '@angular/core';

import {UserDisplayService} from './../user-display.service';
import {UserDetailDto} from './../userDetailDto';
import { Router } from '@angular/router';
import { CustomerIdDto } from '../customerIdDto';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  message:string;
  userDetailDto : UserDetailDto = new UserDetailDto();
  customerIdDto :CustomerIdDto= new CustomerIdDto();
  aadhar: string;
  panCard: string;
  blankCheque: string;
  errMessage: string;
  constructor(private service :UserDisplayService , private router: Router) { }

  ngOnInit(): void {
this.customerIdDto.id=Number(sessionStorage.getItem("activatingUser"))
    this.service.display(this.customerIdDto).subscribe(data =>{
      if(data.status==100){
        this.userDetailDto=data.userDetailDto;
      this.aadhar = data.aadhar;
      this.panCard = data.panCard;
      this.blankCheque = data.blankCheque;
      }
      else{
        this.errMessage = data.message;
      }
  })

  }
  
    cancel(){
      this.router.navigate(['admin']);
      sessionStorage.removeItem("activatingUser");
      
  }
  


}
