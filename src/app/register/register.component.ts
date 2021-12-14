import { Component, OnInit } from '@angular/core';
import { Customer } from './../customer';
import { RegisterService } from './../register.service';
import { NgForm } from '@angular/forms';
import { VerifyDto } from './../verifyDto';
import { OtpManagerDto } from './../otpManagerDto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer: Customer = new Customer();
  sendConfirm: string;
  sendFail: string;
  emailOtp: string;
  otpSuccess: string;
  otpFail: string;
  flagOtp: boolean = false;
  confirmPassword: string;
  usernameMessage: string;
  usernameStatus: boolean = false;
  registerError: string;
  verifyDto:  VerifyDto = new VerifyDto();
  otpManagerDto: OtpManagerDto = new OtpManagerDto();

  registerSuccess:string;
  constructor(private registerService : RegisterService, private router: Router) {
    this.customer.cardType="GOLD";
    this.customer.bankName="HDFC";
   }



   
  ngOnInit(): void {
    
  }
  sendOtp() {
    this.verifyDto.emailId = this.customer.email
    this.registerService.sendMailforOtp(this.verifyDto).subscribe(data =>{
      if(data.status == 100){
        this.sendConfirm = data.message;
        this.sendFail = "";
      }
      else{
        this.sendFail = data.message;
        this.customer.email = "";
        this.sendConfirm= "";
      }
    })
    
  }


  verify() {
    this.otpManagerDto.emailId = this.customer.email;
    this.otpManagerDto.otpRecieved = this.emailOtp;
    this.registerService.verifyOtpEntered(this.otpManagerDto).subscribe(data =>{
      if(data.status=100){
        this.otpSuccess = data.message;
        this.otpFail = "";
        this.flagOtp = true

      }
      else{
        this.otpSuccess = "";
        this.otpFail =  data.message;
        this.flagOtp = false;
      }

    })
    


    
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

  registerUser(form: NgForm) {


    if(form.valid && this.flagOtp && this.confirmPassword.localeCompare(this.customer.password)==0 && this.usernameStatus){

      //alert(JSON.stringify(this.customer));
      
      this.customer.isActive = "false";
      this.registerService.register(this.customer).subscribe(data => {
        this.registerSuccess=data.message;  
        
      });
      this.registerError = "";
    }
    else {
      this.registerError = "There is some error in filling the form. Please review it."
    }

  }

}
