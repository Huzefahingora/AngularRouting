// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.loggedIn) {
      return true; // User is not logged in, allow access
    } else {
      this.router.navigate(['/top/login']); // Redirect logged-in users away from login page
      return false;
    }
  }
}
