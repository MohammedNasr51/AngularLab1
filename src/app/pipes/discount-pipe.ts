import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, discountPercent: number = 10): number {
    if (discountPercent < 0 || discountPercent > 100) {
      return value;
    }
    const discountPrice = value * (discountPercent / 100);
    const finalPrice = value - discountPrice;
    return finalPrice;
  }
}
