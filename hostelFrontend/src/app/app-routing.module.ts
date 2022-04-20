import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './components/email/email.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './service/admin.guard';
import { UserGuard } from './service/user.guard';
import {WelcomeComponent} from './pages/admin/welcome/welcome.component';
import { AddStudentComponent } from './pages/admin/add-student/add-student.component';
import { ViewStudentComponent } from './pages/admin/view-student/view-student.component';

//Array
const routes: Routes = [
  {
    path:"signup",
    component:SignupComponent,
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"sendemail",
    component:EmailComponent,
    pathMatch:"full"
  },
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"admin-dashboard",
    component:DashboardComponent,
    pathMatch:"full",
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
        pathMatch:"full",
      },
      
      {
        path: 'add-student',
        component: AddStudentComponent,
        pathMatch:"full",
      },
      {
        path: 'view-student',
        component: ViewStudentComponent,
        pathMatch:"full",
      },
    
    ],
  },
  {
    path:"user-dashboard",
    component:UserDashboardComponent,
    pathMatch:"full",
    canActivate: [UserGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
