import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadDepartment } from './store/department.action';
import { Observable } from 'rxjs';
import { selectDepartments, selectLoading } from './store/department.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  private store = inject(Store);

  department$  = this.store.select(selectDepartments)
  loading$ = this.store.select(selectLoading)
  ngOnInit(): void {
    this.store.dispatch(loadDepartment())
  }
  


}
