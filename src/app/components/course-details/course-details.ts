import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ICourse } from '../../models/icourses';
import { CourseService } from '../../services/course-service';
import { DiscountPipe } from '../../pipes/discount-pipe';

@Component({
  selector: 'app-course-details',
  imports: [RouterLink, CurrencyPipe, DiscountPipe],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails {
  course: ICourse | null = null;
  isEnrolled = false;
  discountPercent = 20;

  private route = inject(ActivatedRoute);
  private courseService = inject(CourseService);

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.courseService.gerCourseById(id);
  }

  buy() {
    if (!this.course || this.course.seats === 0 || this.isEnrolled) {
      return;
    }

    this.course = { ...this.course, seats: this.course.seats - 1 };
    this.isEnrolled = true;
  }
}
