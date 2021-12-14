import { Component, OnInit } from '@angular/core';
//import { OrderDetail } from '../OrderDetail';
import { OrderDetailService } from './../order-detail.service';
import { Router } from '@angular/router';
import { OrderDetailDto } from '../OrderDetailDto';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  message:string;

  orderList: Array<OrderDetailDto> = new Array();
  //orderdetailTable: boolean = true;
 
  constructor(private orderDetailService : OrderDetailService, private router: Router) { }

  ngOnInit(): void {
    this.orderDetailService.orderDisplay().subscribe(data =>{
       this.orderList = data.orderList;

})

  }

}
