import { Component, OnInit } from '@angular/core';
import {UserDetailDto} from './../userDetailDto';

import {DeleteDataService} from './../delete-data.service';
import {UserDisplayService} from './../user-display.service';
import { Router } from '@angular/router';
import { CustomerIdDto } from './../customerIdDto';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  message:string;
  userDetailDto : UserDetailDto = new UserDetailDto();
  customerIdDto :CustomerIdDto= new CustomerIdDto();
  aadhar: string;
  panCard: string;
  blankCheque: string;
  constructor(private service :UserDisplayService ,private deleteDataService: DeleteDataService, private router: Router) { }

  ngOnInit(): void {
this.customerIdDto.id=Number(sessionStorage.getItem("activatingUser"))
    this.service.display(this.customerIdDto).subscribe(data =>{
      this.userDetailDto=data.userDetailDto;
      this.aadhar = data.aadhar;
      this.panCard = data.panCard;
      this.blankCheque = data.blankCheque;

  })

  }
  //deleteUser(customerAdmin: CustomerAdmin){
    // this.deleteDataService.delete(customerAdmin).subscribe(data =>{
    //   this.message=data.message;
    cancel(){
      this.router.navigate(['admin']);
      sessionStorage.removeItem("activatingUser");
      // this.displayDataService.indexdisplay().subscribe(data =>{
      //   this.userList = data.userList;
      //})
    //})
  }
  activateUser(){
    this.router.navigate(['activate']);
  }
}

