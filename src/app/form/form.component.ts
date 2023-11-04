import { Component } from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserModel } from '../user-model';
import { loadUserId, saveDetails } from '../form.actions';
import { selectUser, selectUserDetails } from '../form.selector';
import { AppState } from '../form.state';

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

  userData!:UserModel;

  public stateData$ = this.store.select(selectUser);

  constructor(private store:Store<AppState>,private fb:FormBuilder){

  }

  saveData():void{
    this.userData = this.userDetailsForm.value;
    this.userData.id=0;
    // this.store.dispatch(saveDetails({userDetails:this.userData}));
    this.store.dispatch(loadUserId());
    console.log(this.stateData$)
    this.stateData$.subscribe((res)=>{
      console.log(res);
    })
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
