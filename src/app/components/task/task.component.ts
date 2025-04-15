import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

// icon ---
import { LucideAngularModule, Pencil, Check, Clock } from 'lucide-angular';

// models -- 
import { Todo } from '../../model/todo.type';
import { HttpClient } from '@angular/common/http';






@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, 
    MatButtonModule,
    LucideAngularModule
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

// oninti life cycle hooks
export class TaskComponent implements OnInit {
  readonly Pencil = Pencil;
  readonly Check = Check;
  readonly Clock = Clock;

  todoItems :Array<Todo>=[];

  // to get the http methods -- get/post/put etc...
  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get<Todo[]>('task.json').subscribe((data)=>{
      this.todoItems = data;
    })
  }
}
