import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CourseGuard } from '../shared/Services/course-guard.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { HttpComponent } from './http/http.component';
import { FavoriteComponent } from './favorite/favorite.component';

console.warn("mid");


const routes: Routes = [

  { path: 'contact', component: ContactComponent ,canActivate : [CourseGuard]},
  { path: 'Contact', component: ContactComponent ,canActivate : [CourseGuard]},

  { path: 'feedback', component: FeedbackComponent ,canActivate : [CourseGuard]},
  { path: 'http', component: HttpComponent ,canActivate : [CourseGuard]},
  {path : 'favorite', component : FavoriteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MidmoduleRoutingModule { }
