import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  getSubjectInfo(){
    return [
    {subject:'Programming', students:["Patrick","Care","Jovan","Jove","Ean"]},
    {subject:'Web Development 2', students:["Cath","Kenneth","Carol","John"]},
    {subject:'Intro to Computing', students:["Jovan","Jove","Dean","Jims"]}
      
  ]
  }
  constructor() { }
}
