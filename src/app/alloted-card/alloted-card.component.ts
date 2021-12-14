import { Router } from '@angular/router';
import { AllotedCardService } from './../alloted-card.service';
import { NgForm } from '@angular/forms';

import { AllotedCard } from './../allotedCard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alloted-card',
  templateUrl: './alloted-card.component.html',
  styleUrls: ['./alloted-card.component.css']
})
export class AllotedCardComponent {

  message: string;
  allotedCard: AllotedCard = new AllotedCard()

  constructor(private router: Router, private service: AllotedCardService) { }

  allotcard(form: NgForm) {
    if (form.valid) {
      this.allotedCard.userid = Number(sessionStorage.getItem("activatingUser"));

      this.service.allotedCardDetail(this.allotedCard).subscribe(data => {

 
       if(data.status==100){
          sessionStorage.removeItem("activatingUser");
        this.router.navigate(['admin']);
       }
       else{
         this.message=data.message;
       }
       

      })
    }
  }

}

