import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.scss']
})
export class ToDoAddComponent implements OnInit {

  newTask: any = {};
  @Input() list: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    if (!this.newTask.name)
      return;
    this.list.push(this.newTask);
    this.newTask = {};
  }

}
