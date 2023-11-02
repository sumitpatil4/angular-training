import { Component } from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  userDetailsForm = this.fb.group({
    firstName:['',Validators.required],
    lastName:['']
  })

  constructor(private fb:FormBuilder){

  }

  saveData():void{
    console.log(this.userDetailsForm.get('firstName')?.value);
    console.log(this.userDetailsForm.get('lastName')?.value);

    //SetValue
    // this.userDetailsForm.setValue({
    //   firstName:"Sumit",
    //   lastName:"Patil"
    // })

    //Patch Value
    // this.userDetailsForm.patchValue({
    //   firstName:"Sumit"
    // })
  }
}
