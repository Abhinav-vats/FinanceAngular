import { Component, OnInit } from '@angular/core';
import {ProductInfoDto} from './../productInfoDto';
import {ProductinfoService} from './../productinfo.service';
import { Router } from '@angular/router';
import {PurchaseProductDto} from './../purchaseProductDto';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {
  message:string;
  productInfoDto : ProductInfoDto = new ProductInfoDto();
  productIdDto :ProductIdDto= new ProductIdDto();
  purchaseProductDto:PurchaseProductDto=new PurchaseProductDto();
  plan:string;
  rem:number;
  perMonthInstallment:number;
  //installments:Array<Installment>= new Array();
  constructor(private service :ProductinfoService ,private router: Router) { 
    this.plan="3";
  }
  
  ngOnInit(): void {
  if(sessionStorage.getItem("customerId")!=null){
    this.productIdDto.id=Number(sessionStorage.getItem("productId"));

    this.service.display(this.productIdDto).subscribe(data =>{
      this.productInfoDto=data.productInfoDto;
      this.router.navigate(['productinfo'])

  })
  }
  else{
    this.router.navigate(['/login'])
  }

  }

  checkInstallment(){
    //let r:number=Number(this.productInfoDto.costPerUnit)/(Number(this.plan));
    this.rem=Math.floor(Number(this.productInfoDto.costPerUnit)%(Number(this.plan)));
    this.perMonthInstallment=Math.floor(Number(this.productInfoDto.costPerUnit)/(Number(this.plan)));


  }

  orderBook(){
    sessionStorage.setItem("a",this.productInfoDto.costPerUnit);
    sessionStorage.setItem("b",this.productInfoDto.detail);
    sessionStorage.setItem("c",this.productInfoDto.name);
    sessionStorage.setItem("d",this.plan);
    this.router.navigate(['confirmorder']);

   
  }
}

  export class ProductIdDto {
    id: number;
    
  }


