import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

// icon ---
import { LucideAngularModule, Pencil, Check, Clock, Trash2, CirclePlus   } from 'lucide-angular';

// models -- 
import { Todo } from '../../model/todo.type';
import { HttpClient } from '@angular/common/http';

// service --
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from "../add-task/add-task.component";






@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    LucideAngularModule,
    AddTaskComponent
],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

// oninti life cycle hooks
export class TaskComponent implements OnInit {
  readonly Pencil = Pencil;
  readonly Check = Check;
  readonly Clock = Clock;
  readonly Trash2  = Trash2 ;
  readonly CirclePlus = CirclePlus;

  todoItems :Array<Todo>=[];

  // to get the http methods -- get/post/put etc...
  // constructor(private http:HttpClient){}

  showAddTask: boolean = false;
  taskToEdit: Todo | null = null;

  constructor(private taskService:TaskService){}

  ngOnInit(): void {
    // hardcoded --
    /*
    this.http.get<Todo[]>('task.json').subscribe((data)=>{
      this.todoItems = data;
    })
    */
    
    // json webserver --
    this.loadTodos();
  }

  loadTodos():void{
    this.taskService.getTodos().subscribe((data)=>{
      // Sort by date descending, assuming ISO format like "2025-04-15"
      this.todoItems = data.sort((a, b) => b.date.localeCompare(a.date));
    })
  }

  onAddClick(){
    this.taskToEdit = null;
    this.showAddTask = true;
  }

  onEditClick(task:Todo){
    this.taskToEdit = task;
    this.showAddTask = true;
  }

  handleFormClose(refresh: boolean = false) {
    this.showAddTask = false;
    this.taskToEdit = null;
    if (refresh) this.loadTodos();
  }

  onDelete(id: number) {
    this.taskService.deleteTodos(id).subscribe(() => {
      this.loadTodos();
    });
  }

  onComplete(task: Todo) {
    this.taskService.moveToCompleted(task).subscribe(() => {
      this.taskService.deleteTodos(task.id!).subscribe(() => {
        this.loadTodos();
      });
    });
  }

  onEdit(task: Todo) {
    this.taskToEdit = task;
    this.showAddTask = true;
  }
}
