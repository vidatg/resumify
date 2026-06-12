import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedToolbarComponent } from './feature/shared-toolbar/shared-toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {}
