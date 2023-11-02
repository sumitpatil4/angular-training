import { Component } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent {
  dataFlag:boolean = false;

  userName!:string;

  apiResponse!:any;

  responseHeading!:string;

  constructor(public githubService:GithubService){
  }

  getUser():void{
    this.githubService.getUserData(this.userName)
      .subscribe({
        next: (response)=>{
          this.dataFlag = true;
          this.apiResponse=response;
          this.responseHeading = "Data Fetched"
        },
        error: (error)=>{
          this.dataFlag = true;
          console.log(error)
          this.responseHeading = "No data Found"
          this.apiResponse=''
        }
     });
  }
}
