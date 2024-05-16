import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './topmodule/home/home.component';
import { AboutComponent } from './bottommodule/about/about.component';
import { ContactComponent } from './midmodule/contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { ErrorComponent } from './bottommodule/error/error.component';
import { CourseGuard } from './shared/Services/course-guard.service';
import { CanDeactivateGuardService } from './shared/Services/deactivate.service';
import { LoginComponent } from './topmodule/login/login.component';
import { PipeComponent } from './bottommodule/pipe/pipe.component';
import { LoginGuard } from './shared/Services/login-guard.service';
import { FeedbackComponent } from './midmodule/feedback/feedback.component';
import { HttpComponent } from './midmodule/http/http.component';
import { FavoriteComponent } from './midmodule/favorite/favorite.component';
import { AngularMatComponent } from './bottommodule/angular-mat/angular-mat.component';
import { MidmoduleModule } from './midmodule/midmodule.module';
import { AdminprodComponent } from './adminprod/adminprod.component';
const appRoutes: Routes = [
  {path : 'top', loadChildren: ()=> import('./topmodule/topmodule.module').
    then(mod=>mod.TopmoduleModule)
  },
  {path: 'mid',loadChildren:() => import('./midmodule/midmodule.module').
    then(mod=>mod.MidmoduleModule)
  },
  {
    path : 'bot', loadChildren: ()=> import('./bottommodule/bottommodule.module')
    .then(mod => mod.BottommoduleModule)
  },
  {path : '',component: HomeComponent,canActivate : [LoginGuard]},

  { path: 'courses', component: CoursesComponent, canActivate: [CourseGuard] },
  { path: 'Courses', component: CoursesComponent, canActivate: [CourseGuard] },
  { path: 'Course/:id', component: CourseComponent, canActivate: [CourseGuard] },
  { path: 'course/:id', component: CourseComponent, canActivate: [CourseGuard] },
  {path : 'admin', component: AdminprodComponent}
];



@NgModule({
imports : [
  RouterModule.forRoot(appRoutes)
],
exports : [
  RouterModule
]
})
export class AppRoutingModule { }
