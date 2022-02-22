import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { SubjectInfoComponent } from './subject-info/subject-info.component';
import { SelectedStudentComponent } from './selected-student/selected-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentInfoComponent,
    SubjectInfoComponent,
    SelectedStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
