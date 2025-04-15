import { Component, OnInit } from '@angular/core';

// icon ---
import { LucideAngularModule, Undo2, Pencil, Check, Clock, Trash2 } from 'lucide-angular';
import { Todo } from '../../model/todo.type';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-completed',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.css'
})
export class CompletedComponent implements OnInit {
  readonly Undo2 = Undo2;
  readonly Clock = Clock;
  readonly Trash2  = Trash2 ;

  completedTodo : Array<Todo>=[];

  constructor(private taskSevice:TaskService){}

  ngOnInit(): void {
    this.loadCompleted();
  }

  loadCompleted():void{
    this.taskSevice.getCompleted().subscribe((data)=>{
      this.completedTodo = data.sort((a,b)=>b.date.localeCompare(a.date));
    })
  }

  onUndo(task:Todo){
    this.taskSevice.moveToTodo(task).subscribe(()=>{
      this.taskSevice.deleteCompleted(task.id!).subscribe(()=>{
        this.loadCompleted();
      })
    })
  }

  onDelete(id:number){
    this.taskSevice.deleteCompleted(id).subscribe(()=>{
      this.loadCompleted();
    })
  }
}
