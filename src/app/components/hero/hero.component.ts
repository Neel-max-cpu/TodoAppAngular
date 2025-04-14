import { Component } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { CompletedComponent } from "../completed/completed.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [TaskComponent, CompletedComponent, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  // background = 'url(/assets/images/bg.jpg)';
}
