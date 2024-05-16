import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../shared/Services/favorite.service';
import { CoursesService } from '../../shared/Services/courses.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favoriteCourses: any[] = [];
  favAvl : boolean = false ;
  constructor(private courseService : CoursesService,
              private router: Router, private MatSnackBar : MatSnackBar) { } // Inject Router

  ngOnInit(): void {
    this.loadFavoriteCourses();
  }

  loadFavoriteCourses(): void {
    this.favoriteCourses = JSON.parse(localStorage.getItem('favoriteCourses') || '[]');
    if(this.favoriteCourses.length == 0){
      this.favAvl == false;
    }
    else{
      this.favAvl = true;
    }
  }

  remove(courseId : any): void {
    let favoriteCourses = JSON.parse(localStorage.getItem('favoriteCourses'));

    if (!Array.isArray(favoriteCourses)) {
      console.error('Error: Unable to retrieve favoriteCourses from localStorage or favoriteCourses data is not an array.');
      return;
    }

    const indexToRemove = favoriteCourses.findIndex(course => course.id === courseId);

    if (indexToRemove !== -1) {
      favoriteCourses.splice(indexToRemove, 1);
      localStorage.setItem('favoriteCourses', JSON.stringify(favoriteCourses));
      // console.log('Course removed successfully.');/
      // Reload the component after removing the course
      this.loadFavoriteCourses();
     if(this.favoriteCourses.length === 0)
      { this.favAvl = false;}
     this.MatSnackBar.open('Product Removed Succesfully','close',{duration : 2000})

    } else {
      console.log('Course not found in the array.');

    }
  }

  // Example method for navigating to another component
  goToHome(): void {
    this.router.navigate(['/top/home']);
  }

  gotToCourses(){
    this.router.navigate(['/courses'])
  }
}
