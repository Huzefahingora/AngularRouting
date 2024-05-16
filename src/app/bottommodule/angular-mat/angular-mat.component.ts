import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-angular-mat',
  templateUrl: './angular-mat.component.html',
  styleUrls: ['./angular-mat.component.css']
})
export class AngularMatComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onClick(message: string, action: string): void {
    let snackBarRef = this.snackBar.open(message, action, { duration: 2000 });

    snackBarRef.afterDismissed().subscribe(() => {
      console.log("SnackBar was dismissed");
    });

    snackBarRef.onAction().subscribe(() => {
      console.log("SnackBar action was triggered");
    });
  }

  applyFilter(filterValue : string){
      this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}
