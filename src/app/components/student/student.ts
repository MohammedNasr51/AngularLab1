import { Component } from '@angular/core';
import { IStudent } from '../../models/student';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  student: IStudent = {
    id: 1,
    name: 'Mohamed',
    age: 23,
    photoUrl: 'https://www.w3schools.com/howto/img_avatar.png',
  };
}
