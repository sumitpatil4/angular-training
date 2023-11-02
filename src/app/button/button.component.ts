import { Component, EventEmitter, Output } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Output() userEvent = new EventEmitter<string>();

  constructor(public userService:UserServiceService){

  }
  buttonClicked():void{
    this.userService.setUserDetails("Sumit Patil");
    console.log("Data Added")
  }

  outputData(){
    return this.userEvent.emit(this.userService.getUserDetails());
  }
}
