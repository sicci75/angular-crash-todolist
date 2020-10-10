import { Component, OnInit } from '@angular/core';
import { GetTodoService } from '../../services/get-todo.service';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private getTodoService: GetTodoService) { }

  ngOnInit(): void {
    this.getTodoService.getTodos().subscribe(todosFromApi => {
      this.todos = todosFromApi;
    });
  }

  deleteTodofn(itemToDelete: Todo) {
    // remove from UI
    this.todos = this.todos.filter(t => t.id !== itemToDelete.id);
    // remove from server
    this.getTodoService.deleteItem(itemToDelete).subscribe(item =>
      console.log("Deleted: " + itemToDelete.title));
  }

  addTodofn(itemToAdd: Todo) {
    // add to server
    this.getTodoService.addItem(itemToAdd).subscribe(item => {
      console.log("Added: " + item.title);
      // add to UI
      this.todos.push(item);
    }
    );

  }

}
