import { Component,OnInit,OnChanges, SimpleChanges, Input } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit,OnChanges {
  name:string = "Sumit Patil"
  @Input() email!:string;

  constructor(public userService:UserServiceService){

  }

  ngOnInit(): void {
    this.userService.setUserDetails("Sumit Patil")
  }
  
  ngOnChanges(changes : SimpleChanges):void{
    // console.log(changes)
  }
}
