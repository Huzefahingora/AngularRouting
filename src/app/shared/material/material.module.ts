import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon'
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponents = [
  MatButtonModule,
  MatSnackBarModule,
  MatSliderModule,
  MatBadgeModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule,
  MatTableModule,
  MatFormFieldModule

];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
