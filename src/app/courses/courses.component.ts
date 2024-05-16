import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/Services/courses.service';
import { FavoriteService } from '../shared/Services/favorite.service';
import { CoursedialogComponent } from '../coursedialog/coursedialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  favoriteCourses: number[] = [];
  constructor(private coursesService: CoursesService,private favoriteService : FavoriteService,
   private MatSnackBar : MatSnackBar,private dialog: MatDialog
  ) { }
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

        this.showSuccessMessage = true;

        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000);
        this.MatSnackBar.open('Product Added Succesfully','close', {duration : 2000})
      }
      else{
        this.showAlredyMassage = true;

        setTimeout(() => {
          this.showAlredyMassage = false;
        }, 3000);
        this.MatSnackBar.open('Product Already Added ','close', {duration : 2000})

      }


    }
    // added(){
    //   this.MatSnackBar.open('Product Added Succesfully')
    // }

    // already(){
    //   this.MatSnackBar.open('Product Already Added')
    // }


    getTotalCourses(){
      return this.courses.length;
    }
    getTotalFreeCourses(){
      return this.courses.filter(course => course.type === 'Free').length;
    }
    getTotalPremiumCourses(){
      return this.courses.filter(course => course.type === 'Premium').length;
    }

    courseCountRadioButton: string = 'All';
    searchText: string = '';

    onFilterRadioButtonChanged(data: string){
      this.courseCountRadioButton = data;
      console.log(this.courseCountRadioButton);
    }



}

