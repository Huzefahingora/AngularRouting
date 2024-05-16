import { Component, OnInit,Inject ,EventEmitter, Output} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-coursedialog',
  templateUrl: './coursedialog.component.html',
  styleUrls: ['./coursedialog.component.css']
})
export class CoursedialogComponent implements OnInit {
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();
  constructor( public dialogRef: MatDialogRef<CoursedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  addToFavorites(): void {
    this.data.addToFavorites(this.data.course);
  }


  onButtonClick(): void {
    this.buttonClicked.emit();
  }
}


