import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userRole: string = '';
  loggedIn: boolean = false;
    constructor(private router : Router, private notificationService : NotificationService ){}
  logIn(userRole: string) {
    this.userRole = userRole;
    this.loggedIn = true;
    localStorage.setItem('loggedIn', 'true');
  }
  loadAuthState() {
    // Load authentication state from browser storage
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      this.loggedIn = true;
      // Optionally, load other authentication-related data here
    }
  }
  logOut() {
    if (!this.loggedIn) {
      alert("You are already logged out");
    } else {
      setTimeout(()=> {
        this.router.navigate(['/top/login']);
      this.notificationService.showLogoutSuccessMessage();
      this.loggedIn = false;
      this.userRole = '';
      localStorage.removeItem('loggedIn');
      },500)
    }
  }


  isAuthenticated() {
    return this.loggedIn;
  }

  getUserRole() {
    return this.userRole;
  }
}
