import { Component, NgModule } from '@angular/core';
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
import { ViewAllStudentComponent } from './pages/admin/view-all-student/view-all-student.component';
import { FeesComponent } from './pages/admin/fees/fees.component';
import { ViewfeesComponent } from './pages/admin/viewfees/viewfees.component';
import { SetfeesComponent } from './pages/admin/setfees/setfees.component';
import { UpdatefeesComponent } from './pages/admin/updatefees/updatefees.component';
import { RoomsComponent } from './pages/admin/rooms/rooms.component';
import { CalculatefeesComponent } from './pages/admin/calculatefees/calculatefees.component';
import { CountofroomsComponent } from './pages/admin/countofrooms/countofrooms.component';
import { CountoffreeroomsComponent } from './pages/admin/countoffreerooms/countoffreerooms.component';
import { AssignroomComponent } from './pages/admin/assignroom/assignroom.component';

import { InitializeroomComponent } from './pages/admin/initializeroom/initializeroom.component';
import { UpdateroomComponent } from './pages/admin/updateroom/updateroom.component';
import { VacateroomComponent } from './pages/admin/vacateroom/vacateroom.component';
import { IsoccupiedComponent } from './pages/admin/isoccupied/isoccupied.component';
import { GetroomComponent } from './pages/admin/getroom/getroom.component';

import { welcomeComponent } from 'src/app/pages/user/welcome/welcome.component';
import { InformationComponent } from './pages/user/information/information.component';
import { ShowfeesComponent } from './pages/user/showfees/showfees.component';
import { RoomComponent } from './pages/user/room/room.component';


//Array
const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
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
    canActivate: [UserGuard],
    children:[
      
      {
        path:'',
        component: welcomeComponent,
      },
      {
        path: 'welcome',
        component:  welcomeComponent,
      },
      {
        path:'information',
        component:InformationComponent,
      },
      {
        path:'showfees',
        component:ShowfeesComponent,
      },
      {
        path:'room',
        component:RoomComponent,
      }

    ]
    

  },

    {
      path:"admin-dashboard",
      component:DashboardComponent,
      canActivate: [AdminGuard],
    
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
      },

      {
        path: 'add-student',
        component: AddStudentComponent,
      },
      {
        path: 'view-student',
        component: ViewStudentComponent,
      },
      {
        path: 'delete-student',
        component: DeleteStudentComponent,
      },
      {
        path:'view-all-student',
        component:ViewAllStudentComponent,
      },

        {
          path:'rooms',
          component:RoomsComponent,
          children:
          [
            {
            path:'countofrooms',
            component:CountofroomsComponent,
            },
            {
              path:'countoffreerooms',
              component:CountoffreeroomsComponent,
            },
            {
              path:'assignroom',
              component:AssignroomComponent,
            },
            {
              path:'getroom',
              component:GetroomComponent,
            },
            {
              path:'initializeroom',
              component:InitializeroomComponent,
            },
            {
              path:'updateroom',
              component:UpdateroomComponent,
            },
            {
              path:'vacateroom',
              component:VacateroomComponent,
            },
            {
              path:'isoccupied',
              component:IsoccupiedComponent,
            },

          ]
        },
      
      {
        path:'fees',
        component:FeesComponent,
        children:
        [
          {
            path:'viewfees',
            component:ViewfeesComponent,
          },

          {
            path:'setfees',
            component:SetfeesComponent,
          },

          {
            path:'updatefees',
            component:UpdatefeesComponent,
          },
          {
            path:'calculatefees',
            component:CalculatefeesComponent,

          }
        ]

        
      }
     
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
