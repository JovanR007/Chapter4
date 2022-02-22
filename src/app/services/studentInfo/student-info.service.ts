import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {
  getStudentInfo(){
    return [
      {name:'Patrick', age:25, course:"BS-CpE"},
      {name:'Jove', age:24, course:"BS-ICT" },
      {name:'Jovan', age: 23, course:"BS-IT"}
    ]
  }

  constructor() { }
}
