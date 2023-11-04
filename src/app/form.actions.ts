import { createAction, props } from "@ngrx/store";
import { UserModel } from "./user-model";

export const saveDetails = createAction(
    '[Form Data] Save Details',
    props<{userDetails:UserModel}>()
);

export const loadUserId = createAction(
    '[Form Data] Load User Id'
)