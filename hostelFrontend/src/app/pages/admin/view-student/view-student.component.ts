import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})

export class ViewStudentComponent implements OnInit
 {

  data=
  {
    Id:"",
    userName:"",
    firstname:"",
    lastname:"",
    phone:"",
    email:""
  }
  
  constructor(private student:UserService,private snak:MatSnackBar)
   { }

  ngOnInit(): void 
  {
    this.student.viewUser(this).subscribe((response: any) => 
    {
      this.data = response;
      console.log(this.data);
    },

    (error) => 
    {
      console.log(error);
      Swal.fire('Error !!', 'Error in loading data', 'error');
    });
  }

}
