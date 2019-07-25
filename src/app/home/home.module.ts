import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {CreateTodoModule} from '../../../projects/create-todo/src/app/create-todo.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CreateTodoModule
  ]
})
export class HomeModule { }
