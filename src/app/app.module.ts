  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { RouterModule, Routes } from '@angular/router';

  import { AppComponent } from './app.component';
  import { HomeComponent } from './topmodule/home/home.component';
  import { AboutComponent } from './bottommodule/about/about.component';
  import { ContactComponent } from './midmodule/contact/contact.component';
  import { CoursesComponent } from './courses/courses.component';
  import { CoursesService } from './shared/Services/courses.service';
  import { CourseComponent } from './courses/course/course.component';
  import { ErrorComponent } from './bottommodule/error/error.component';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { AppRoutingModule } from './app-routing.module';
  import { CourseGuard } from './shared/Services/course-guard.service';
  import { AuthService } from './shared/Services/auth.service';
  import { LoginComponent } from './topmodule/login/login.component';
  import { CanDeactivateGuardService } from './shared/Services/deactivate.service';
  import { NavbarComponent } from './navbar/navbar.component';
  import { PipeComponent } from './bottommodule/pipe/pipe.component';
  import { ResultPipe } from './bottommodule/pipe/result.pipe';
  import { FilterPipe } from './shared/filter.pipe';
  import { FeedbackComponent } from './midmodule/feedback/feedback.component';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { HttpComponent } from './midmodule/http/http.component';
  import {HttpClientModule} from '@angular/common/http'
  import { ProductService } from './shared/Services/products.service';
  import { MatSnackBarModule } from '@angular/material/snack-bar';
  import { FavoriteComponent } from './midmodule/favorite/favorite.component';
  import { AngularMatComponent } from './bottommodule/angular-mat/angular-mat.component';
  import { MatSliderModule } from '@angular/material/slider';
  import { MaterialModule } from './shared/material/material.module';
import { CoursedialogComponent } from './coursedialog/coursedialog.component';
import { FilterComponent } from './courses/filter/filter.component';
import { AdminprodComponent } from './adminprod/adminprod.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';

  @NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      ContactComponent,
      CoursesComponent,
      CourseComponent,
      ErrorComponent,
      LoginComponent,
      NavbarComponent,
      PipeComponent,
      ResultPipe,
      FilterPipe,
      FeedbackComponent,
      HttpComponent,
      FavoriteComponent,
      AngularMatComponent,
      CoursedialogComponent,
      FilterComponent,
      AdminprodComponent,
      AgGridComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MaterialModule
    ],
    providers: [CoursesService,CourseGuard,AuthService,CanDeactivateGuardService,ProductService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
