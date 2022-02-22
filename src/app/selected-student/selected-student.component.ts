import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-selected-student',
  templateUrl: './selected-student.component.html',
  styleUrls: ['./selected-student.component.css']
})
export class SelectedStudentComponent implements OnInit {
  
  @Input() displayStudent!: { name: string; age: any; course: string; };
  testPerf!: number;
  studentScore!: number;
  examName!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
