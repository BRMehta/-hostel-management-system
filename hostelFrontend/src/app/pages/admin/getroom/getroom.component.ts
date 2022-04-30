import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-getroom',
  templateUrl: './getroom.component.html',
  styleUrls: ['./getroom.component.css']
})
export class GetroomComponent implements OnInit 
{
  
  data=
  {
    stud_id:0,
    room_id:0
  }
  constructor(private student:UserService,private snak:MatSnackBar)
  { }

  ngOnInit(): void {
  }
  doSubmitForm()
  {

    ////this.flag=true;
    this.student.getroombystudid(this.data.stud_id).subscribe((response: any) => 
    {
     this.data=response ;
     console.log(this.data);
     Swal.fire('Success', this.data.room_id+" ", 'error');
    },

    (error: any) => 
    {
      //this.flag=false;
      console.log(error);
      Swal.fire('Error !!', 'Error in loading data', 'error');
    });
  }


}
