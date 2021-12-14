import { Component, OnInit } from '@angular/core';
import { Customer } from './../customer';
import { UpdateDataService } from './../update-data.service';
import { RegisterService } from './../register.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  customer: Customer = new Customer();
  sendConfirm: string;
  emailOtp: string;
  otpdisplay: string;
  flagOtp: boolean = false;
  confirmPassword: string;
  usernameMessage: string;
  usernameStatus: boolean = false;
 updateError: string;
 




  constructor(private registerService : RegisterService, private updateDataService : UpdateDataService) {
    this.customer.cardType="GOLD";
    this.customer.bankName="HDFC";
   }



   
  ngOnInit(): void {
    
  }
 
  checkUsername() {
    this.registerService.usernameCheck(this.customer.username).subscribe(data => {
      if (data.status == 100) {
        this.usernameMessage = data.message;
        this.usernameStatus = true;
      }
      else {
        this.usernameMessage = data.message;
        this.usernameStatus = false;
      }
    })
  }

  updateUser(form: NgForm) {


    if(this.confirmPassword.localeCompare(this.customer.password)==0 && this.usernameStatus){

      //this.customer.isActive = "false";
      this.updateDataService.update(this.customer).subscribe(data => {
        alert(data.message);
      });
      this.updateError = "";
    }
    else {
      this.updateError = "There is some error in filling the form. Please review it."
    }


    /*this.registerService.register(this.customer).subscribe(data =>{
      alert(data.message);
    })*/
  }

}

