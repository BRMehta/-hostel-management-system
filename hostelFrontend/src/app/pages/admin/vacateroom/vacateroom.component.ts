import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vacateroom',
  templateUrl: './vacateroom.component.html',
  styleUrls: ['./vacateroom.component.css']
})
export class VacateroomComponent implements OnInit {
  
    id: 0 = 0;
   
  

  constructor(private student:UserService,private snak:MatSnackBar)
  { }

  ngOnInit(): void 
  {}

  doSubmitForm()
  {

    this.student.vacateroom(this.id).subscribe((response: any) => 
    {
      Swal.fire('Success !!', 'success');
    },

    (error: any) => 
    {
      console.log(error);
      Swal.fire('Error !!', 'Error invacating', 'error');
    });
  }

}
