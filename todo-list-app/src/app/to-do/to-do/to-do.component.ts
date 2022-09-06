import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('ToDoComponent - constructor');
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    console.log('ToDoComponent - AfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ToDoComponent - AfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('ToDoComponent - AfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ToDoComponent - AfterContentInit');
  }


  list: any[] = [];
  color= 'yellow';

  ngDoCheck(): void {
    console.log('ToDoComponent - DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ToDoComponent - OnChanges');
  }
  ngOnInit(): void {
    console.log('ToDoComponent - OnInit');

    this.list.push({ id: 1, name: 'Limpiar habitación', default: true });
    this.list.push({ id: 2, name: 'Lectura diaria', default: true });

  }

}
