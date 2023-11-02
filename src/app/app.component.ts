import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  email:string = "sumit6921@gmail.com"

  getData(userDetails:string){
    console.log(userDetails);
  }
}
