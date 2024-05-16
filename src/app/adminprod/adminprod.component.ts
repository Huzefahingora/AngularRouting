import { Course } from './../shared/model/courses';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoursesService } from '../shared/Services/courses.service';

@Component({
  selector: 'app-adminprod',
  templateUrl: './adminprod.component.html',
  styleUrls: ['./adminprod.component.css']
})
export class AdminprodComponent implements OnInit {
  reactiveForm: FormGroup;
  valid:boolean = true;
  editMode : boolean;
  constructor(private http : HttpClient, private coursesService : CoursesService) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      cname: new FormControl(null, Validators.required),
      cauthor: new FormControl(null, Validators.required),
      cduration: new FormControl(null, Validators.required),
      ctype: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      ratings: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    });
  }
  onCourseCreate(course:Course){
    this.coursesService.onCreateCourse(course);
  }
}
