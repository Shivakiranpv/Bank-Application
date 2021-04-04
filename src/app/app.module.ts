import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './popup/popup.component';
import {MaterialModuleModule}  from './material-module/material-module.module';
import {ReactiveFormsModule}  from '@angular/forms';
import { HttpClientModule}  from '@angular/common/http'
import { MatTableModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    ReactiveFormsModule,
  HttpClientModule,
  MatTableModule,
  MatSortModule
  ],
  entryComponents:[
    PopupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
