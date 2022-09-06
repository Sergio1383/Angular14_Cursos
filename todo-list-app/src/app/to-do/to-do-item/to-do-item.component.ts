import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit, OnDestroy {

  @Input()
  item: any;

  @Input()
  list: any[] = [];

  constructor(private toastrSevice: ToastrService) { }
  ngOnDestroy(): void {
    console.log('ToDoItemComponent - OnDestroy');
  }

  ngOnInit(): void {
  }

  delete(item: any): void {
    let index = this.list.findIndex(x => x.name == item.name);

    console.log('index', index);

    // delete this.list[index];
    this.list.splice(index,1);

    this.toastrSevice.success('ToDo App','Tarea eliminada!');

  }

}
