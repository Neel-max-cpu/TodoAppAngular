import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    NavbarComponent,
    HeroComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoApp';
}
