import { ActiveServiceService } from './../active-service.service';
import { Activate } from './../activate';

import { AllotedCard } from './../allotedCard';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {
  message:string;

  activates: Activate = new Activate()
  constructor(private router: Router, private serve: ActiveServiceService ) { }

  ngOnInit(): void {
  }

 
  activate(){
    this.activates.id = Number(sessionStorage.getItem("activatingUser"));
    this.serve.activateCust(this.activates).subscribe(data =>{
      if(data.status==100){
        this.router.navigate(['alloted']);
      }
      else{

     this.message=data.message;
        
      }
    })
    

   



  }
}
