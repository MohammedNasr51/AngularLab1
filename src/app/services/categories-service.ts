import { Injectable } from '@angular/core';
import { ICategory } from '../models/icourses';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categories: ICategory[] = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'Business' },
    { id: 3, name: 'Marketing' },
    { id: 4, name: 'Design' },
  ];

  getAllCategories(): ICategory[] {
    return this.categories;
  }
}
