import { Component, OnInit } from '@angular/core';
import { PurchaseProductDto } from '../purchaseProductDto';
import { ProductinfoService } from '../productinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {
  purchaseProductDto:PurchaseProductDto=new PurchaseProductDto();
  plan: string;
  name: string;
  detail: string;
  price: number;
  constructor(private service :ProductinfoService ,private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("customerId")!=null && sessionStorage.getItem("a")!=null){
      this.name = sessionStorage.getItem("c");
    this.plan = sessionStorage.getItem("d");
    this.detail = sessionStorage.getItem("b");
    this.price = Number(sessionStorage.getItem("a"));
    }

    else if(sessionStorage.getItem("customerId")!=null && (sessionStorage.getItem("a")==null)){
      this.router.navigate(['productinfo']);
    }
    
  }


  confirmOrder(){
    this.purchaseProductDto.userId=Number(sessionStorage.getItem("customerId"));
    this.purchaseProductDto.productId=Number(sessionStorage.getItem("productId"));
    this.purchaseProductDto.plan=this.plan;
    this.service.purchaseProductService(this.purchaseProductDto).subscribe(data =>{
     sessionStorage.removeItem("a");
     sessionStorage.removeItem("b");
     sessionStorage.removeItem("c");
     sessionStorage.removeItem("d");
     sessionStorage.setItem("confirmation", data.message);
     this.router.navigate(['acknowledgement']);
 
    });
   }

   cancel(){
    sessionStorage.removeItem("a");
    sessionStorage.removeItem("b");
    sessionStorage.removeItem("c");
    sessionStorage.removeItem("d");
    this.router.navigate(['productinfo']);
   }

}
