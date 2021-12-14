import { Component, OnInit } from '@angular/core';
import { IndexService } from './../index.service';
import { Product } from './../Product';
import { Router } from '@angular/router';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  productList: Array<Product> =  new Array();
  message: string ;

  constructor(private service: IndexService, private router: Router) { }

  ngOnInit(): void {
    this.service.indexDisplay().subscribe(data =>{
     
      if(data.productList!=null){   
        
        this.message="";
        this.productList = data.productList;
      }
      else{
        this.message = data.message;
      }

    })

  }


  buyNow(product:  number){
    //change to not null
    if(sessionStorage.getItem("customerId")!=null){
      let id : any = product;
      sessionStorage.setItem("productId", id);
      this.router.navigate(['productinfo']);
    }
    else{
      this.router.navigate(['login']);
    }
  }

}
