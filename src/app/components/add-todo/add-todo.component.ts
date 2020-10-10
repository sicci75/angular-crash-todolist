import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

@Output() addTodoEvent: EventEmitter<any> = new EventEmitter();

titleInput:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const item = {
      title: this.titleInput,
      completed: false
      }
    this.addTodoEvent.emit(item);
  }
}
