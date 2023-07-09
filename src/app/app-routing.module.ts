import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';

const routes: Routes = [
  {path:'student',component:StudentListComponent},
{path:'create-student',component:CreateStudentComponent},
{path:'',redirectTo:'student',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { RegistrationListComponent } from './registration-list/registration-list.component';
// import { CreateRegistrationComponent } from './create-registration/create-registration.component';

// const routes: Routes = [
// {path:'registration',component:RegistrationListComponent},
// {path:'create-registration',component:CreateRegistrationComponent},
// {path:'',redirectTo:'registration',pathMatch:'full'}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
