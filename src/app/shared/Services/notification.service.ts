import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) { }

  showLogoutSuccessMessage() {
    this.snackBar.open('Logout successful', 'Close', {
      duration: 2000, // Display for 2 seconds
      horizontalPosition: 'end', // Position at the end of the screen
      verticalPosition: 'top', // Position at the top of the screen
    });
  }

  }

