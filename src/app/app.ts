import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Student } from './components/student/student';
import { Courses } from './components/courses/courses';
import { Footer } from './components/footer/footer';
import { Order } from "./components/order/order";

@Component({
  selector: 'app-root',
  imports: [Navbar, Student, RouterOutlet, Courses, Footer, Order],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('studentApp');
}
