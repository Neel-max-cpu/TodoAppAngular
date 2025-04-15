import { Component } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { CompletedComponent } from "../completed/completed.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import {MatButtonToggleModule} from '@angular/material/button-toggle';


@Component({
  selector: 'app-hero',
  imports: [TaskComponent, CompletedComponent, CommonModule,MatButtonToggleModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  // default tasks
  selectedView: string = 'tasks';
}
