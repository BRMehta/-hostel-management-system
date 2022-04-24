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
import { DeleteStudentComponent } from './pages/admin/delete-student/delete-student.component';
import {SportshomeComponent} from "./pages/sportshome/sportshome.component";
import {SportudashComponent} from "./pages/sportudash/sportudash.component";
import {SportsheaderComponent} from "./pages/sportsheader/sportsheader.component";
import {SportsidenavComponent} from "./pages/sportsidenav/sportsidenav.component";

//Array
const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"sportshome",
    component:SportshomeComponent,
    pathMatch:"full"
  },
  {
    path:"sportudash",
    component:SportudashComponent,
    pathMatch:"full"
  },
  {
    path:"sportsheader",
    component:SportsheaderComponent,
    pathMatch:"full"
  },
  {
    path:"sportssidenav",
    component:SportsidenavComponent,
    pathMatch:"full"
  },
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
    path:"user-dashboard",
    component:UserDashboardComponent,
    pathMatch:"full",
    canActivate: [UserGuard],
  },
  // {
  //       path:"admin-dashboard",
  //       component:DashboardComponent,
  //       pathMatch:"full",
  // },
  //   {
  //     path: 'welcome',
  //     component: WelcomeComponent,
  //     pathMatch:"full",
  //   },

  //   {
  //     path: 'add-student',
  //     component: AddStudentComponent,

  //   },
  //   {
  //     path: 'view-student',
  //     component: ViewStudentComponent,
  //     pathMatch:"full",
  //   },

    {
      path:"admin-dashboard",
      component:DashboardComponent,
      //pathMatch:"full",
      canActivate: [AdminGuard],

    children: [
      {
        path: '',
        component: WelcomeComponent,
      },

      {
        path: 'admin-dashboard/add-student',
        component: AddStudentComponent,
      },
      {
        path: 'admin-dashboard/view-student',
        component: ViewStudentComponent,
      },
      {
        path: 'admin-dashboard/delete-student',
        component: DeleteStudentComponent,
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
