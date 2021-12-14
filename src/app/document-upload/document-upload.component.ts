import { UploadService } from './../upload.service';
import { Component, OnInit } from '@angular/core';
import { UploadDocument } from './../uploadDocument';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnInit {

  uploadDocument : UploadDocument = new UploadDocument();
  errMessage: string;
  aadharCard:any;
  panCard:any;
  blankCheque: any;

  constructor(private uploadServe : UploadService,  private router: Router) { }


  ngOnInit(): void {
    if(sessionStorage.getItem("customerId")==null ){
      this.router.navigate(['login']);
    }
  }

  uploadDocumentFunc(){
      let formData : FormData = new FormData();
      formData.append('aadharCard',this.aadharCard);
      formData.append('panCard',this.panCard);
      formData.append('blankCheque', this.blankCheque);
      formData.append('userId', (sessionStorage.getItem("customerId")));

      
      
       this.uploadServe.uploadDocuments(formData).subscribe(data =>{
           if(data.status==100){
             this.errMessage="";
            sessionStorage.clear();
             this.router.navigate(['/login']);
           }
           else{
             this.errMessage = data.message;
           }
       });

     // alert(JSON.stringify(this.uploadDocument));
    


  }

  onFileChange(event){
    this.aadharCard = event.target.files[0];
  }

  onFileChange1(event){
    this.panCard = event.target.files[0];
  }

  onFileChange2(event){
    this.blankCheque = event.target.files[0];
  }



}
