import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { LaundryService } from 'src/app/service/laundry.service';
import { LoginService } from 'src/app/service/login.service';


export class laundryRequest {
  constructor(
    public id: number,
    public user: {id:number},
    public requestTime:Date,
    public acceptanceTime:Date,
    public rejectionTime:Date,
    public completionTime:Date,
    public weightOfCloths:number,
    public clothsDry:boolean,
    public numberOfIronedCloths:number,
    public amount:number,
    public payment:number,
    public rejectionReason:string,
  ) {
  }
}
@Component({
  selector: 'app-pending-request',
  templateUrl: './pending-request.component.html',
  styleUrls: ['./pending-request.component.css']
})
export class PendingRequestComponent implements OnInit {
  pendingReqs$: Observable<laundryRequest[]> | undefined;
  constructor(private laundry:LaundryService,
              private login:LoginService, private snack:MatSnackBar) 
              {
              }
 
  ngOnInit(): void {
    this.pendingReqs$ = this.laundry.getPendingRequestsById(this.login.getUser().id);
  }
}
