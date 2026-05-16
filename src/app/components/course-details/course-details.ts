import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, NgClass } from '@angular/common';
import { ICourse } from '../../models/icourses';
import { CourseService } from '../../services/course-service';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { Order } from '../../services/order';


@Component({
  selector: 'app-course-details',
  imports: [RouterLink, CurrencyPipe, DiscountPipe, NgClass],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails {
  course: ICourse | null = null;
  isEnrolled = false;
  discountPercent = 20;

  private route = inject(ActivatedRoute);
  private courseService = inject(CourseService);
  private orderService = inject(Order);
  orderStatus = signal<string>('');

  constructor() {
    const id = Number(this.route.snapshot.params['id']);
    this.course = this.courseService.gerCourseById(id);
  }

  buy() {
    if (!this.course || this.course.seats === 0 || this.isEnrolled) {
      return;
    }
    this.orderService.getOrderStatus().subscribe({
      next: (status) => {
        this.orderStatus.set(status as string);
      },
      error: (error) => {
        this.orderStatus.set(error as string);
      },
    });
    this.course = { ...this.course, seats: this.course.seats - 1 };
    this.isEnrolled = true;
  }
}
