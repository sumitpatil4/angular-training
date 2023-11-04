import { createSelector } from '@ngrx/store';
import { AppState } from './form.state';
import { UserState } from './form.reducer';

export const selectUserDetails = (state:AppState)=>state.userDetails;
export const selectUser = createSelector(
    selectUserDetails,
    (state:UserState)=>state.userDetails
);