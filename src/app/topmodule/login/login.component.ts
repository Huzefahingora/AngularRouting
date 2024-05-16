import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  signupUser: any[] = [];
  signupObj: any = {
    role: '',
    username: '',
    email: '',
    password: ''
  };

  loginUser: any[] = [];
  loginObj: any = {
    role: '',
    email: '',
    password: ''
  };

  ngOnInit(): void {
    const localdata = localStorage.getItem('signupUser');
    if (localdata != null) {
      this.signupUser = JSON.parse(localdata);
    }
    this.authService.loadAuthState();
  }

  onLogin() {
    if (this.loginObj.email && this.loginObj.password && this.loginObj.role) {
      const isUserExist = this.signupUser.find(m => m.email === this.loginObj.email && m.password === this.loginObj.password && m.role === this.loginObj.role);
      if (isUserExist !== undefined) {
        this.authService.logIn(this.loginObj.role);
        this.router.navigate(['/top/home']);
        this.authService.loggedIn = true; // Update loggedIn state
      } else {
        alert("Email, password, or role not matched or not found");
        this.router.navigate(['/login']);

      }
    } else {
      alert("Please fill in all fields");
    }
  }

  onSignUp() {
    if (this.signupObj.email && this.signupObj.password && this.signupObj.role && this.signupObj.username) {
      this.signupUser.push(this.signupObj);
      localStorage.setItem('signupUser', JSON.stringify(this.signupUser));
      this.signupObj = {
        username: '',
        email: '',
        password: '',
        role: ''
      };
      this.authService.loggedIn = false; // Update loggedIn state
    } else {
      alert("Please fill in all fields");
    }
  }
}
