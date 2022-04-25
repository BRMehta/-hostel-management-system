import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { laundryRequest } from '../pages/user/laundry/pending-request/pending-request.component';
import baseUrl from './helper';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LaundryService {

  constructor(private http:HttpClient,private snack:MatSnackBar,private route:Router,
    private login:LoginService) { }

  //add laundry request
  public addLaundryRequest(laundryRequest:any)
  {
    return this.http.post(`${baseUrl}/laundry/`,laundryRequest)
  }

  //update laundry request by id
  public updateLaundryRequestById(reqId:number,weight:number,dryCloths:boolean,numIronCloths:number)
  {
    this.http.put<any>(`${baseUrl}/laundry/update/${reqId}/${weight}/${dryCloths}/${numIronCloths}`,{}).subscribe(
      (data:any)=>{
        this.route.navigate(['user-dashboard/pending-request']);
        this.snack.open('Updated!','OK',{
          duration:3000,
        })
      },
      (error)=>{
        console.log('Error!');
        console.log(error);
        this.snack.open('Invalid Details! Try again','OK',{
          duration:3000,
        })
      }
    )
  }
  
  //delete laundry request by id
  public deleteLaundryRequestById(reqId:number)
  {
    return this.http.delete(`${baseUrl}/laundry/${reqId}`)
  }

  //get pending requests by id
  public getPendingRequestsById(id:number)
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/pending-req/${id}`)
  }

    //get pending requests by req id
    public getPendingRequestsByReqId(id:number)
    {
      return this.http.get<laundryRequest>(`${baseUrl}/laundry/pending-req-by-id/${id}`)
    }

  //get all pending requests
  public getPendingRequests()
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/pending-req`)
  }

  //get accepted requests by id
  public getAcceptedRequestsById(id:number)
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/accepted-req/${id}`)
  }

  //get all accepted requests
  public getAcceptedRequests()
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/accepted-req`)
  }

  //get rejected requests by id
  public getRejectedRequestsById(id:number)
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/rejected-req/${id}`)
  }

  //get all rejected requests
  public getRejectedRequests()
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/rejected-req`)
  }

  //get completed requests by id
  public getCompletedRequestsById(id:number)
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/completed-req/${id}`)
  }

  //get all completed requests
  public getCompletedRequests()
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/completed-req`)
  }
}


