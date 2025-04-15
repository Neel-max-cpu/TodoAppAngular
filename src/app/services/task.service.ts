import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseurl = 'http://localhost:3000'

  constructor(private http:HttpClient){}

  // Pending Tasks ---
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.baseurl}/todo`);
  }

  addTodos(todo: Todo):Observable<Todo>{
    return this.http.post<Todo>(`${this.baseurl}/todo`, todo);
  }

  updateTodos(id:number, todo:Todo):Observable<Todo>{
    return this.http.put<Todo>(`${this.baseurl}/todo/${id}`, todo);
  }

  deleteTodos(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseurl}/todo/${id}`);
  }

  // Completed Tasks ---
  getCompleted(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseurl}/completed`);
  }

  deleteCompleted(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseurl}/completed/${id}`);
  }

  // Move todo to completed
  moveToCompleted(task: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseurl}/completed`, task);
  }

  // Move completed to todo
  moveToTodo(task: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseurl}/todo`, task);
  }
  
}
