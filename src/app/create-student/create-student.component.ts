import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';


@Component({
   selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
  })
export class CreateStudentComponent implements OnInit {

  student:Student=new Student();

   constructor(private studentService:StudentService,
      private router:Router ){ }
  ngOnInit(): void {
  }
  saveStudent(){
     this.studentService.createStudent(this.student).subscribe(data=>{
      console.log(data);
      this.goToStudentList();
    },
     error => console.log(error));
    }
     goToStudentList(){
    this.router.navigate(['/student']);
     }
    
    onSubmit(){
    console.log(this.student);
   this.saveStudent();
    }
   
     }
    

// import { Component, OnInit } from '@angular/core';
// import { Registration } from '../registration';
// import { Router } from '@angular/router';
// import { RegistrationService } from '../service-registration.service';


// @Component({
//   selector: 'app-create-registration',
//   templateUrl: './create-registration.component.html',
//   styleUrls: ['./create-registration.component.css']
// })
// export class CreateRegistrationComponent implements OnInit {
//   registration:Registration=new Registration();
  

//   constructor(private registrationService:RegistrationService,
//    private router:Router){ }
//   ngOnInit(): void {
//   }
// saveRegistration(){
//   this.registrationService.createRegistration(this.registration).subscribe(data=>{
//     console.log(data);
//     this.goToRegistrationList();
//   },
//   error => console.log(error));
// }
//   goToRegistrationList(){
//     this.router.navigate(['/registration']);
//   }

// onSubmit(){
//  console.log(this.registration);
//  this.saveRegistration();
// }
// getDName(){

//   var dName=(this.registration.firstName?this.registration.firstName:'')+' '+(this.registration.lastName?this.registration.lastName:'');
//    this.registration.displayName=dName;

// }
// }
// // getDisplayName(){

// //   var dName=(this.registration.firstName?this.registration.firstName:'')+' '+(this.registration.lastName?this.registration.lastName:'');
// //    this.registration.displayName=dName;

// // }