import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL="http://localhost:8080/stu";
  
  constructor(private  httpclient:HttpClient) { }

  getStudentList():Observable<Student[]>{
  return this.httpclient.get<Student[]>(`${this.baseURL}`);
}
createStudent(student:Student):Observable<Object>{
 return this.httpclient.post(`${this.baseURL}`,student);
 }
}

  

