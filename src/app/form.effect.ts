import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from './form.state';
import { Store } from '@ngrx/store';
import { UserServiceService } from './user-service.service';
import { loadUserId, saveDetails } from './form.actions';
import { catchError, map, switchMap } from 'rxjs';
import { GithubService } from './github.service';
import { UserModel } from './user-model';

@Injectable()
export class UserEffects{
    constructor(
        private actions$:Actions,
        private store:Store<AppState>,
        private gitHubService: GithubService
    ){}

    loadUserId$ = createEffect(()=>
        this.actions$.pipe(
            ofType(loadUserId),
            switchMap(()=>this.gitHubService.getUserData('sumitvpatil').pipe(
                map(res => saveDetails({userDetails:{id:res.id,firstName:"Sumit",lastName:"Patil"}})),
                )
            )
        )
    );
}
