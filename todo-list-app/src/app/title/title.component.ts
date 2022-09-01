import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  // styleUrls: ['./title.component.scss']
  styles:['span { text-decoration: underline;}']
})
export class TitleComponent implements OnInit {
  title = 'todo-list-app';
  constructor() { }

  ngOnInit(): void {
  }

}
