import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './components/email/email.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AcceptedRequestComponent } from './pages/user/laundry/accepted-request/accepted-request.component';
import { CompletedRequestComponent } from './pages/user/laundry/completed-request/completed-request.component';
import { NewRequestComponent } from './pages/user/laundry/new-request/new-request.component';
import { PendingRequestComponent } from './pages/user/laundry/pending-request/pending-request.component';
import { RejectedRequestComponent } from './pages/user/laundry/rejected-request/rejected-request.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './service/admin.guard';
import { UserGuard } from './service/user.guard';


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
  },
  {
    path:"user-dashboard",
    component:UserDashboardComponent,
    canActivate: [UserGuard],
    children:[
      {
        path:'new-request',
        component:NewRequestComponent,
      },
      {
        path:'pending-request',
        component:PendingRequestComponent
      },
      {
        path:'accepted-request',
        component:AcceptedRequestComponent
      },
      {
        path:'rejected-request',
        component:RejectedRequestComponent
      },
      {
        path:'completed-request',
        component:CompletedRequestComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

