import { Component, OnInit } from '@angular/core';
import { Login } from './../login';
import { NgForm } from '@angular/forms';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  message: string;

  constructor(private loginService: LoginService, private router: Router) {
    this.login.userType = "Customer";
  }

  ngOnInit(): void {
  }

  loginUser(loginForm: NgForm) {
    if (loginForm.valid) {
      this.loginService.loginserve(this.login).subscribe(data => {
        this.message = "";
        if (data.status == 101) {
          this.message = data.message;
        }
        else {
          if (data.userType.localeCompare("Admin") == 0) {
            //this.router.navigate(['adminDisplay']);
            this.message = "";
            let adminId: any = data.userId;
            sessionStorage.setItem("adminId", adminId);
            //alert("admin login successfull");
            this.router.navigate(['admin']);
          }
          else {
            this.message = "";
            let customerId: any = data.userId
            sessionStorage.setItem("customerId", customerId);

            // if(!data.documentUploadedStatus){
            //   this.router.navigate(['docupload']);

            // }
            if (!data.activeStatus) {
              this.message = "You are not currently activated by the admin. Please contact admin to activate";
              //this.router.navigate(['notActive']);
              //alert("You are not currently activated by the admin. Please contact admin to activate")
            }
            else {
              this.message = "";
              this.router.navigate(['/dashboard']);
              //alert(data.message);
              let customerId: any = data.userId
              

               if(!data.documentUploadedStatus){
                 this.router.navigate(['docupload']);
                 sessionStorage.setItem("customerId", customerId);
                
               }
              if(!data.activeStatus){
                this.message = "You are not currently activated by the admin. Please contact admin to activate";
              }
              else{
                this.message = "";
                this.router.navigate(['/dashboard']);
                sessionStorage.setItem("customerId", customerId);
                
              }
            }
          }
        }
      })
    }
    else {
      this.message = "Some input is missing";
    }

  }

}
