import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { laundryRequest } from '../pages/user/laundry/pending-request/pending-request.component';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LaundryService {

  constructor(private http:HttpClient) { }

  //add laundry request
  public addLaundryRequest(laundryRequest:any)
  {
    return this.http.post(`${baseUrl}/laundry/`,laundryRequest)
  }

  //get pending requests by id
  public getPendingRequestsById(id:number)
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/pending-req/${id}`)
  }

  //get all pending requests
  public getPendingRequests()
  {
    return this.http.get(`${baseUrl}/laundry/pending-req`)
  }

  //get accepted requests by id
  public getAcceptedRequestsById(id:number)
  {
    console.log(`${baseUrl}/laundry/accepted-req/${id}`);
    return this.http.get(`${baseUrl}/laundry/accepted-req/${id}`)
  }

  //get all accepted requests
  public getAcceptedRequests()
  {
    return this.http.get(`${baseUrl}/laundry/accepted-req`)
  }

  //get rejected requests by id
  public getRejectedRequestsById(id:number)
  {
    return this.http.get(`${baseUrl}/laundry/rejected-req/${id}`)
  }

  //get all rejected requests
  public getRejectedRequests()
  {
    return this.http.get(`${baseUrl}/laundry/rejected-req`)
  }

  //get completed requests by id
  public getCompletedRequestsById(id:number)
  {
    return this.http.get(`${baseUrl}/laundry/completed-req/${id}`)
  }

  //get all completed requests
  public getCompletedRequests()
  {
    return this.http.get(`${baseUrl}/laundry/completed-req`)
  }
}


