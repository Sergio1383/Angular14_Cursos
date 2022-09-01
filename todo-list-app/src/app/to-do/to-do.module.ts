import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './to-do/to-do.component';
import { FormsModule } from '@angular/forms';
import { ToDoAddComponent } from './to-do-add/to-do-add.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoAdd2Component } from './to-do-add2/to-do-add2.component';

@NgModule({
  declarations: [
    ToDoComponent,
    ToDoAddComponent,
    ToDoListComponent,
    ToDoAdd2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ToDoComponent]
})
export class ToDoModule { }
