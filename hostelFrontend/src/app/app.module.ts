import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { EmailComponent } from './components/email/email.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EmailService } from './service/email.service';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './service/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NewRequestComponent } from './pages/user/laundry/new-request/new-request.component';
import { PendingRequestComponent } from './pages/user/laundry/pending-request/pending-request.component';
import { AcceptedRequestComponent } from './pages/user/laundry/accepted-request/accepted-request.component';
import { RejectedRequestComponent } from './pages/user/laundry/rejected-request/rejected-request.component';
import { CompletedRequestComponent } from './pages/user/laundry/completed-request/completed-request.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { UpdateRequestComponent } from './pages/user/laundry/update-request/update-request.component';
import { AcceptedAdminRequestComponent } from './pages/admin/accepted-admin-request/accepted-admin-request.component';
import { CompletedAdminRequestComponent } from './pages/admin/completed-admin-request/completed-admin-request.component';
import { PendingAdminRequestComponent } from './pages/admin/pending-admin-request/pending-admin-request.component';
import { RejectedAdminRequestComponent } from './pages/admin/rejected-admin-request/rejected-admin-request.component';
import { UpdateAdminRequestComponent } from './pages/admin/update-admin-request/update-admin-request.component';
import { SetLaundryPricesComponent } from './pages/admin/set-laundry-prices/set-laundry-prices.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmailComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    NewRequestComponent,
    PendingRequestComponent,
    AcceptedRequestComponent,
    RejectedRequestComponent,
    CompletedRequestComponent,
    UpdateRequestComponent,
    AcceptedAdminRequestComponent,
    CompletedAdminRequestComponent,
    PendingAdminRequestComponent,
    RejectedAdminRequestComponent,
    UpdateAdminRequestComponent,
    SetLaundryPricesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTabsModule,
    MatRadioModule,
    MatTableModule
  ],
  providers: [MatSnackBar,EmailService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
