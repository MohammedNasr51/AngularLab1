import { Component, effect, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICourse } from '../../models/icourses';
import { NgClass, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DisableAfterClick } from '../../disable-after-click';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { CourseService } from '../../services/course-service';

@Component({
  selector: 'app-courses',
  imports: [FormsModule, NgClass, DisableAfterClick, DiscountPipe, CurrencyPipe, RouterLink],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  selectedCatId = input<number>(0);
  onOrderPriceChange = output<number>();
  courseService: CourseService = inject(CourseService);
  discountPercent: number = 20;
  totalPrice: number = 0;
  courses: ICourse[] = [];
  filteredCourses: ICourse[] = [];

  constructor() {
    this.courses = this.courseService.getAllCourses();
    this.filteredCourses = this.courses;
    effect(() => {
      this.filteredCourses = this.courseService.gerCoursesByCatId(this.selectedCatId());
    });
  }

  buy(id: number) {
    this.filteredCourses = this.filteredCourses.map((course) => {
      if (course.id === id && course.seats > 0) {
        this.totalPrice += course.price - (course.price * this.discountPercent) / 100;
        this.onOrderPriceChange.emit(this.totalPrice);
        return { ...course, seats: course.seats - 1 };
      }
      return course;
    });
  }
}
