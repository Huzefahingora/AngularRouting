import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../shared/Services/courses.service';
import { NotificationService } from '../../shared/Services/notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CoursedialogComponent } from 'src/app/coursedialog/coursedialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private coursesService: CoursesService, private notificationService : NotificationService,
    private _snackBar : MatSnackBar, private dialog : MatDialog) { }
  showSuccessMessage : boolean;
  showAlredyMassage : boolean ;
  courses = [];

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }
  openDialog(course: any): void {
    const dialogRef = this.dialog.open(CoursedialogComponent, {
      width: '500px',
      data: { course: course, addToFavorites: this.addToFavorites.bind(this) }
    });
    dialogRef.componentInstance.buttonClicked.subscribe(() => {
      dialogRef.close();
    });
  }

  addToFavorites(course: any): void {
    // Check if favoriteCourses array already exists in local storage
    let favoriteCourses = JSON.parse(localStorage.getItem('favoriteCourses') || '[]');

    // Check if the course is already in favorites
    const existingCourseIndex = favoriteCourses.findIndex((c: any) => c.id === course.id);

    if (existingCourseIndex === -1) {
        // Add the course to favorites
        favoriteCourses.push(course);
        // Update local storage
        localStorage.setItem('favoriteCourses', JSON.stringify(favoriteCourses));

        // Show success snackbar
        this._snackBar.open('Product Added Successfully', 'Close', {
            duration: 2000, // Duration in milliseconds
        });
    } else {
        // Show error snackbar
        this._snackBar.open('Product Already Added', 'Close', {
            duration: 2000, // Duration in milliseconds
        });
    }

  }}
