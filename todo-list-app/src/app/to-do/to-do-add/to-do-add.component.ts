import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.scss']
})
export class ToDoAddComponent implements OnInit, OnChanges {

  newTask: any = {name: 'new task'};
  @Input() list: any[] = [];

  constructor(private toastrSevice: ToastrService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ToDoAddComponent - OnChanges');
  }

  ngOnInit(): void {
  }

  add(): void {
    if (!this.newTask.name)
      return;
    this.list.push(this.newTask);
    this.newTask = {};

    this.toastrSevice.success('ToDo App','Nueva tarea agregada!');
  }

}
