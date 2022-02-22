import { Component, OnInit } from '@angular/core';
import { StudentInfoService } from '../services/studentInfo/student-info.service';
interface Student {
  name: string;
  age: number;
  course:string
}

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  studentInformation:Student[]=[];
  pickedStudent:Student | any
  examLogs:{studentName:string,examName:string,examScore:number,studentScore:number}[]=[];


  saveStudent(selectedStudent:Student){
    this.pickedStudent=selectedStudent;
  }
 
  constructor(private studentService: StudentInfoService) {}
   getStudentData(){
    this.studentInformation=this.studentService.getStudentInfo();
  }
  ngOnInit(): void {
    this.getStudentData();
  }

  

}
