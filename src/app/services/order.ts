import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Order {
  ordersStatus: string[] = ['pending', 'processing', 'shipped', '', 'delivered'];
  getOrderStatus() {
    return new Observable((observer) => {
      let index = 0;
      const id = setInterval(() => {
        if (this.ordersStatus[index] === '') {
          observer.error('error');
        }
        if (index < this.ordersStatus.length) {
          observer.next(this.ordersStatus[index]);
          index++;
        } else {
          observer.complete();
        }
      }, 2000);
      return {
        unsubscribe(){
          clearInterval(id);
          console.log('unsubscribed');
        }
      }
    });
  }
}
