import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/Services/auth.service';
import { Router } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  storedArray: any[] = [];
  arraySize: number = 0;
  appmenu: any;

  constructor(private authService: AuthService, private router: Router) {
    // Initialize variables in the constructor
    const storedArrayStr = localStorage.getItem('favoriteCourses');
    if (storedArrayStr) {
      this.storedArray = JSON.parse(storedArrayStr);
      this.arraySize = this.storedArray.length;
    }
  }

  ngOnInit(): void {
  }

  loginState: boolean = this.authService.loggedIn;

  logout() {
    this.authService.logOut();
    this.loginState = this.authService.loggedIn;
  }

  isCourseRoute(): boolean {
    return this.router.url.startsWith('/Course') || this.router.url.startsWith('/course');
  }

}
