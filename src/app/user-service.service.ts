import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  userDetails!:string;

  getUserDetails():string{
    return this.userDetails;
  }

  setUserDetails(userDetails:string):void{
    this.userDetails = userDetails;
  }
}
