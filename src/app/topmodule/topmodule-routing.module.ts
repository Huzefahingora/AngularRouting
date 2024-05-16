import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CanActivate } from '@angular/router';
import { CourseGuard } from '../shared/Services/course-guard.service';
import { LoginGuard } from '../shared/Services/login-guard.service';
console.warn("top");

const routes: Routes = [
  { path: '', redirectTo: '/top/home', pathMatch: 'full' },
  // LoginComponent as the initial route
  { path: 'login', component: LoginComponent },
  // Base route that redirects to HomeComponent
  { path: 'Base', redirectTo: '/top/home', pathMatch: 'full' },
  {path : '' , component : HomeComponent},
  {path : 'home', component : HomeComponent},
  { path: 'home', component: HomeComponent ,canActivate : [CourseGuard]},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopmoduleRoutingModule { }
