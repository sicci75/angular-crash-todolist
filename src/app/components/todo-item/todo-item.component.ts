import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GetTodoService } from '../../services/get-todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() items: Todo;
  @Output() deleteTodoEvent: EventEmitter<Todo> = new EventEmitter();

  constructor(private getTodoService: GetTodoService) { }

  ngOnInit(): void {
  }

  // set dynamic classes
  setClasses() {
    let classes = {
      todoItem: true,
      isComplete: this.items.completed
    }
    return classes;
  }

  onToggle(toggledItem) {
    // toggle in UI
    toggledItem.completed = !toggledItem.completed;
    // toggle on server
    this.getTodoService.toggleCompleted(toggledItem).subscribe(item =>
      console.log(item));
  }

  onDelete(clickedItem) {
    console.log("Clicked the item for delete: " + clickedItem.title);
    this.deleteTodoEvent.emit(clickedItem);
    
  }
}
