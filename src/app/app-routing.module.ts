import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { AllotedCardComponent } from './alloted-card/alloted-card.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateComponent } from './update/update.component';
import { DetailComponent } from './detail/detail.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { LogoutComponent } from './logout/logout.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'product', component: TestComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'acknowledgement', component: AcknowledgementComponent },
  { path: 'confirmorder', component: ConfirmOrderComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'nupur_test1', component: AllotedCardComponent },
  { path: 'activate', component: ActivateAccountComponent },
  { path: 'docupload', component: DocumentUploadComponent },
  { path: 'details', component: DetailComponent },
  { path: 'alloted', component: AllotedCardComponent },
  { path: 'productinfo', component: ProductinfoComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'adminview', component: AdminviewComponent },
  { path: 'app', component: AppComponent },
  { path: 'adminview', component: AdminviewComponent },
  //{ path: 'paymentschedule', component: PaymentScheduleStatus}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
