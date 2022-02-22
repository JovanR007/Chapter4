import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject/subject.service';
@Component({
  selector: 'app-subject-info',
  templateUrl: './subject-info.component.html',
  styleUrls: ['./subject-info.component.css']
})
export class SubjectInfoComponent implements OnInit {
  subjectInformation: any;
  studentSubject: any = [];
  pickSubject: any;
  constructor(private subjectService : SubjectService) { }
    getSubjectData(){
      this.subjectInformation = this.subjectService.getSubjectInfo();
    }

    
  ngOnInit(): void {
    this.getSubjectData();
  }

  subjectInfo(a: any){
    this.pickSubject = a;
    console.log(a);
  }
}
