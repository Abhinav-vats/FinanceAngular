import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service';
import { CustomerIdDto } from './../customerIdDto';
import { CardDashboardDetail } from '../cardDashboardDetail';
import { ProductDashboard } from '../productDashboard';
import { TransactionDashboard } from '../transactionDashboard';
import { Router } from '@angular/router';
import { OrderService } from './../order.service';
import { OrderDto } from '../OrderDto';
import { OrderDashboard } from './../orderDashboard';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customerIdDto: CustomerIdDto = new CustomerIdDto();
  cardDashboardDetai: CardDashboardDetail;
  productList: Array<ProductDashboard> = new Array();
  transactionList: Array<TransactionDashboard> = new Array();
  orderList: Array<OrderDashboard> =  new Array();
  myOrderListError: string;
  errMessage: string;
  active: string="gh";
  notActive: string;
  productListError: string;
  transactionListError: string;

  constructor(private dashboardService: DashboardService,private orderService : OrderService, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("customerId") != null) {
      this.customerIdDto.id = Number(sessionStorage.getItem("customerId"));
      this.dashboardService.dashboardDisplay(this.customerIdDto).subscribe(data => {
        if (data.status == 100) {
                  alert(JSON.stringify(data.productList));
          this.errMessage = "";
          
          this.cardDashboardDetai = data.cardDashboardDetail;
          sessionStorage.setItem("customerName", this.cardDashboardDetai.name.split(" ")[0]);
          if (data.productList.length != 0) {
            this.productListError = "";
            this.productList = data.productList;
          }
          else {
            this.productListError = "No payment scheduled for the Month."
          }
          if (data.transactionList.length != 0) {
            this.transactionListError = "";
            this.transactionList = data.transactionList;
          }
          else {
            this.transactionListError = "No transaction in last 30 days.";
          }
          if(data.orderList.length!=0){
            this.myOrderListError="";
            this.orderList = data.orderList;
           
          }
          else{
            this.myOrderListError= "You have not ordered anything yet";
          }
        }
        else {
          this.errMessage = data.message;
        }

      })
    }
    else {
      this.router.navigate(['login']);
    }

  }


  payForThisSchedule(id: number){
    this.customerIdDto.id = id;
    this.dashboardService.payInstallment(this.customerIdDto).subscribe(data =>{
      if(data.status==100){
      alert(data.message);
      this.router.navigate(['dashboard']);
      }
      else{
        alert(data.message);
      }
    })
  }

}


