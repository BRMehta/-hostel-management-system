import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
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
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddStudentComponent } from './pages/admin/add-student/add-student.component';
import { ViewStudentComponent } from './pages/admin/view-student/view-student.component';
import { DeleteStudentComponent } from './pages/admin/delete-student/delete-student.component';
import { UpdateStudentComponent } from './pages/admin/update-student/update-student.component';
import { ViewAllStudentComponent } from './pages/admin/view-all-student/view-all-student.component';
import { SportudashComponent } from './pages/sportudash/sportudash.component';
import { SportsidenavComponent } from './pages/sportsidenav/sportsidenav.component';
import { SportshomeComponent } from './pages/sportshome/sportshome.component';
import { SportsheaderComponent } from './pages/sportsheader/sportsheader.component';
import {MatTableModule} from '@angular/material/table';
import { SportuformComponent } from './pages/sportuform/sportuform.component';


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
    SidebarComponent,
    WelcomeComponent,
    AddStudentComponent,
    ViewStudentComponent,
    DeleteStudentComponent,
    UpdateStudentComponent,
    ViewAllStudentComponent,
    SportudashComponent,
    SportsidenavComponent,
    SportshomeComponent,
    SportsheaderComponent,
    SportuformComponent
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
    MatListModule,
    MatSidenavModule,
    MatTableModule
  ],
  providers: [MatSnackBar,EmailService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
