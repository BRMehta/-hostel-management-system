import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatefees',
  templateUrl: './updatefees.component.html',
  styleUrls: ['./updatefees.component.css']
})
export class UpdatefeesComponent implements OnInit
{

  data=
  {
    hostelfee:"",
    messfee:"",
  }


  constructor(private student:UserService,private snak:MatSnackBar) { }


  ngOnInit(): void {
  }


  doSubmitForm()
  {
    this.student.updatefees(this.data).subscribe(
    (response:any)=>
    {


      this.data = response;
      Swal.fire('Success', 'Fees  is Set', 'success');

    },
    (error:any) => 
    {
     
      Swal.fire('Error!! ', 'Error while Setting  Fees ', 'error');
      console.log(error);
    }
    );
  
  }


}
