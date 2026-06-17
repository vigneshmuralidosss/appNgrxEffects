import { createAction, props } from "@ngrx/store";
import { Department } from "./department";

export const loadDepartment = createAction('[department loading]')

export const successResponse = createAction(
    '[department success]',props<{departments : Department[]}>()
)