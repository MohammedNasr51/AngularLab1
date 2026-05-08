import { Component, inject } from '@angular/core';
import { ICategory } from '../../models/icourses';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Courses } from "../courses/courses";
import { CategoriesService } from '../../services/categories-service';

@Component({
  selector: 'app-order',
  imports: [CommonModule, FormsModule, Courses,CurrencyPipe],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  selectedCatId = 0;
  totalPrice = 0;
  categories: ICategory[] = [];
  categoriesService: CategoriesService = inject(CategoriesService);

  constructor() {
    this.categories = this.categoriesService.getAllCategories();
  }

  updateTotalPrice(price: number) {
    this.totalPrice = price;
  }

}
