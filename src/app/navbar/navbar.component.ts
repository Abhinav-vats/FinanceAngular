import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'FinanceManagementSystem';
  user : string = null;
  admin : string ="admin";
  customer : string  = "customer"
  dashboard: string;

  constructor() { }

  ngOnInit(): void {

    if(sessionStorage.getItem("adminId")!=null && sessionStorage.getItem("customerId")==null){
      this.user = this.admin;
    }
    else if(sessionStorage.getItem("adminId")==null && sessionStorage.getItem("customerId")!=null){
      this.user = "customer";
      this.dashboard = sessionStorage.getItem("customerName");
    }
    else{
      this.user = null;
    }
  }

}
