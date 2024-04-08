import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewtaskComponent } from './newtask/newtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewtaskComponent,UpdatetaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tracker';
}
