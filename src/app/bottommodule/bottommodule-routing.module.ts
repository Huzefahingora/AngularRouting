import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMatComponent } from './angular-mat/angular-mat.component';
import { ErrorComponent } from './error/error.component';
import { CourseGuard } from '../shared/Services/course-guard.service';
import { AboutComponent } from './about/about.component';
import { PipeComponent } from './pipe/pipe.component';
console.warn("but");

const routes: Routes = [

  {path : 'mat', component : AngularMatComponent},
  { path: 'about', component: AboutComponent },
  {path : 'About', component : AboutComponent},
  { path: 'pipe', component: PipeComponent },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottommoduleRoutingModule { }
