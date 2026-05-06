import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Student } from './components/student/student';
import { Courses } from './courses/courses';

@Component({
  selector: 'app-root',
  imports: [Navbar,Student,RouterOutlet,Courses],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('studentApp');
}
