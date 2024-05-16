import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularRouting';
  loginState: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loadAuthState(); // Ensure authentication state is loaded on component initialization
    this.loginState = this.authService.loggedIn;
  }
  
  logout(): void {
    this.authService.logOut();
    this.loginState = this.authService.loggedIn;
  }
  
  checkState(): boolean {
    // console.log("Authentication State:", this.authService.loggedIn);
    return this.authService.loggedIn;
  }
}
