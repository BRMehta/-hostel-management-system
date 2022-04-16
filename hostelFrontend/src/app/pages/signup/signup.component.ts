import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private snak:MatSnackBar) { }

  //variable name=backend var name
  public user={
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {

  };

  formSubmit()
  {
      console.log(this.user);
      if(this.user.userName==''|| this.user.userName==null ||
         this.user.password==''|| this.user.password==null ||
         this.user.firstName==''|| this.user.firstName==null ||
         this.user.lastName==''|| this.user.lastName==null ||
         this.user.email==''|| this.user.email==null ||
         this.user.phone==''|| this.user.phone==null
         )
      {
        this.snak.open("fields can not be empty!!","OK");
        return;
      }
  }
}
