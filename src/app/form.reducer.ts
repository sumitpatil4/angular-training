import { createReducer ,on, Action } from '@ngrx/store';
import { saveDetails } from './form.actions';
import { UserModel } from './user-model';

export interface UserState {
    userDetails:UserModel;
}

export const initialState:UserState = {
    userDetails:{id:0,firstName:'',lastName:''}
}

export const UserReducer = createReducer(
    initialState,
    on(saveDetails,(state,{userDetails})=>({
        ...state,
        userDetails:userDetails
    }))
)