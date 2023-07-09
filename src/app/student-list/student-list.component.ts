import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  student!:Student[];
    constructor(private studentService:StudentService) { }
  
    ngOnInit(): void {
       this.getStudent();
     }
   private getStudent(){
     this.studentService.getStudentList().subscribe(data=>{
       this.student=data;
      
     });
    }
   
}


// import { Component, OnInit } from '@angular/core';
// import { Registration } from '../registration';
// import { RegistrationService} from '../service-registration.service'
// import { Student } from '../student';
// import { StudentService } from '../student-service.service';

// @Component({
//   selector: 'app-registration-list',
//   templateUrl: './registration-list.component.html',
//   styleUrls: ['./registration-list.component.css']
// })
// export class RegistrationListComponent implements OnInit {
// registration!:Registration[];
//   constructor(private registrationService:RegistrationService) { }

//   ngOnInit(): void {
//     this.getRegistration();
//   }
// private getRegistration(){
//   this.registrationService.getRegistrationList().subscribe(data=>{
//     this.registration=data;
    
//   });
// }
// 