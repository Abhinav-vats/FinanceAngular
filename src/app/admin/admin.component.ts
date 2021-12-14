import { Component, OnInit } from '@angular/core';
import { CustomerAdmin } from '../customerAdmin';
import {DisplayDataService} from './../display-data.service';
import {DeleteDataService} from './../delete-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  message:string;
  userList: Array<CustomerAdmin> =  new Array();
  activeUserList: Array<CustomerAdmin> =  new Array();
  nonActiveUserList: Array<CustomerAdmin> =  new Array();
  activeUserTable : boolean = false;
  nonactiveUserTable : boolean = false;

  constructor(private displayDataService: DisplayDataService,private deleteDataService: DeleteDataService, private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("adminId")==null){
      this.router.navigate(['login'])
    }
    else{
     this.displayDataService.indexdisplay().subscribe(data =>{
     //   this.userList = data.userList;

        for(let p of data.userList)
        {
          if(p.isActive=="false"){
            this.nonActiveUserList.push(p);
          }
          //else("p.isActive==false")
          else
          {
            this.activeUserList.push(p);
          }
        }

        if(this.activeUserList.length>0){
          this.activeUserTable = true;
        }
        if(this.nonActiveUserList.length>0){
          this.nonactiveUserTable=true
        }

      })
    }
  }

  deleteUser(customerAdmin: CustomerAdmin){
    this.deleteDataService.delete(customerAdmin).subscribe(data =>{
      this.message=data.message;
      this.router.navigate(['admin']);
      // this.displayDataService.indexdisplay().subscribe(data =>{
      //   this.userList = data.userList;
      //})
    })
  }

  detail(id:number){
    let cid : any =  id;
    sessionStorage.setItem("activatingUser", cid);
    this.router.navigate(['adminview']);
  }
  detailActive(id:number){
    let cid : any =  id;
    sessionStorage.setItem("activatingUser", cid);
    this.router.navigate(['details']);
  }
/*
  activateUser(customerAdmin: CustomerAdmin){
    let id : any =  customerAdmin.id;
    sessionStorage.setItem("activatingUser", id);
    this.router.navigate(['activate']);
  }*/
  
}
