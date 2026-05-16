import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

  login(username: string, password: string) {
    localStorage.setItem('token', 'sakdfjalksgajkfhgsjkdfhgl');
    this.loginStatus.next(true);
  }
  logout() {
    localStorage.removeItem('token');
    this.loginStatus.next(false);
  }
  isLoggedIn(): BehaviorSubject<boolean> {
    return this.loginStatus;
  }
}
