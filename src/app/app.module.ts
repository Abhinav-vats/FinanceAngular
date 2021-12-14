import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AllotedCardComponent } from './alloted-card/alloted-card.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateComponent } from './update/update.component';
import { DetailComponent } from './detail/detail.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ProductinfoComponent } from './productinfo/productinfo.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';





@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TestComponent,
    RegisterComponent,
    AllotedCardComponent,
    ActivateAccountComponent,
    LoginComponent,
    ForgetPasswordComponent,
    DocumentUploadComponent,
    AdminComponent,
    UpdateComponent,
    DetailComponent,
    AdminviewComponent,
    LogoutComponent,
    NavbarComponent,
    ProductinfoComponent,
    DashboardComponent,
    ConfirmOrderComponent,
    AcknowledgementComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
