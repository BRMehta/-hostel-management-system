import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //auto wire dependency inject
  constructor(private http:HttpClient){
   }

  //add user
  public addUser(user:any)
  {
    return this.http.post(`${baseUrl}/user/`,user)
  }
}
