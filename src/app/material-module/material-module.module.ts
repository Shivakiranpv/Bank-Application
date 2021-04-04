import { NgModule } from '@angular/core';
import {MatInputModule,MatButtonModule,MatIconModule,MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatTableModule} from '@angular/material';

const materialComponents=[
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule
]
@NgModule({
  declarations: [],
  imports: [
    materialComponents
  ],
  exports:[
    materialComponents
  ]
})
export class MaterialModuleModule { }
