import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CoursesService } from 'src/app/shared/Services/courses.service';
import { AuthService } from 'src/app/shared/Services/auth.service';
import { Subscription } from 'rxjs';
import {Location} from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  constructor(private service: CoursesService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService, private _location: Location) {

  }

  course: any;
  courseId: number = 0;
  editMode: boolean = false;
  editRight: boolean;
  userRole: string;
  loginState: boolean = this.authService.loggedIn;
  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['id'];
    this.course = this.service.courses.find(x => x.id == this.courseId);
    this.route.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get('edit'));
    });

    this.userRole = this.authService.userRole;
    this.editRight = this.userRole === 'Admin';

  }
  back(): void {
    this._location.back()
  }

  onEditMode(s: string): void {
    if (s == 'e' && !this.editMode) {
      this.editMode = true;
    } else if (s == 'u' && this.editMode) {
      this.editMode = false;
    }
  }

  appendQueryParam(): void {
    this.router.navigate(['Course', this.courseId], { queryParams: { edit: true } });
  }
}
