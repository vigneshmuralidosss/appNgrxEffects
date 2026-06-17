import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { departmentReducer } from './store/department.reducer';
import { provideHttpClient } from '@angular/common/http';
import { DepartmentEffects } from './store/department.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    provideHttpClient(),
    provideStore({departments:departmentReducer}), 
    provideEffects([DepartmentEffects])]
};
