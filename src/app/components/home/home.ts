import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Student } from '../student/student';

@Component({
  selector: 'app-home',
  imports: [Student, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
