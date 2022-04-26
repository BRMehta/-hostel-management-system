import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './components/email/email.component';
import { AcceptedAdminRequestComponent } from './pages/admin/accepted-admin-request/accepted-admin-request.component';
import { CompletedAdminRequestComponent } from './pages/admin/completed-admin-request/completed-admin-request.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { PendingAdminRequestComponent } from './pages/admin/pending-admin-request/pending-admin-request.component';
import { RejectedAdminRequestComponent } from './pages/admin/rejected-admin-request/rejected-admin-request.component';
import { SetLaundryPricesComponent } from './pages/admin/set-laundry-prices/set-laundry-prices.component';
import { UpdateAdminRequestComponent } from './pages/admin/update-admin-request/update-admin-request.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AcceptedRequestComponent } from './pages/user/laundry/accepted-request/accepted-request.component';
import { CompletedRequestComponent } from './pages/user/laundry/completed-request/completed-request.component';
import { NewRequestComponent } from './pages/user/laundry/new-request/new-request.component';
import { PendingRequestComponent } from './pages/user/laundry/pending-request/pending-request.component';
import { RejectedRequestComponent } from './pages/user/laundry/rejected-request/rejected-request.component';
import { UpdateRequestComponent } from './pages/user/laundry/update-request/update-request.component';
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
    canActivate: [AdminGuard],
    children:[
      {
        path:'set-laundry-prices',
        component:SetLaundryPricesComponent
      },
      {
        path:'pending-admin-request',
        component:PendingAdminRequestComponent
      },
      {
        path:'accepted-admin-request',
        component:AcceptedAdminRequestComponent
      },
      {
        path:'rejected-admin-request',
        component:RejectedAdminRequestComponent
      },
      {
        path:'completed-admin-request',
        component:CompletedAdminRequestComponent
      },
      {
        path:'update-admin',
        component:UpdateAdminRequestComponent
      },
    ]
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
      {
        path:'update',
        component:UpdateRequestComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

