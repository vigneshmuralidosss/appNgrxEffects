import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DepartmentService } from "../services/department.service";
import { loadDepartment, successResponse } from "./department.action";
import { map, mergeMap } from "rxjs";

@Injectable()
export class DepartmentEffects {
    action$ = inject(Actions);
    constructor(private deptsrv: DepartmentService) { }
    loadDepartments = createEffect(() =>
        this.action$.pipe(
            ofType(loadDepartment),
            mergeMap(() =>
                this.deptsrv.getData().pipe(
                    map((departments: any) => 
                        successResponse({ departments })
                    )
                )
            )
        )
    )  
}