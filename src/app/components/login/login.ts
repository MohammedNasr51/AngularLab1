import { Component, inject, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  authService = inject(Auth);
  isLoggedIn: boolean = false;
  router = inject(Router);
  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe({
      next: (val) => {
        this.isLoggedIn = val;
      },
    });
  }
  login() {
    this.authService.login('admin', 'admin');
    this.router.navigateByUrl('/home');
  }
}
