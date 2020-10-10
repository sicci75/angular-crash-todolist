import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GetTodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';

  constructor(private http:HttpClient) { }

  // get todos
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // toggle todo state
  toggleCompleted(item: Todo): Observable<any> {
    const url: string = `${this.todosUrl}/${item.id}`;
    return this.http.put<Todo>(url, item, httpOptions);
  }

  // delete todo item
  deleteItem(item: Todo): Observable<Todo> {
    const url: string = `${this.todosUrl}/${item.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // add todo item
  addItem(item: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.todosUrl}`, item, httpOptions);

  }
}
