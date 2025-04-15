import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { TaskService } from '../../services/task.service';
import { Todo } from '../../model/todo.type';


@Component({
  selector: 'app-add-task',
  imports: [MatCardModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input() task: Todo | null = null;
  @Output() closeForm = new EventEmitter<boolean>();

  title: string="";
  date: string="";

  constructor(private taskService: TaskService){}

  ngOnInit() {
    if (this.task) {
      this.title = this.task.title;
      this.date = this.task.date;
    }
  }

  assignTask() {
    if (!this.title.trim() || !this.date.trim()) {
      alert('Please fill in both Title and Date.');
      return;
    }
    
    const newTask: Partial<Todo> = {
      title: this.title,
      date: this.date
    };

    if (this.task) {
      this.taskService.updateTodos(this.task.id!, newTask as Todo).subscribe(() => {
        this.closeForm.emit(true);
      });
    } else {
      this.taskService.addTodos(newTask as Todo).subscribe(() => {
        this.closeForm.emit(true);
      });
    }
  }

  cancel() {
    this.closeForm.emit(false);
  }
}
