import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
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

  //get email id based on student id
  public getEmailIdByStudId(id:number){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text'
    }
    return this.http.get<any>(`${baseUrl}/user/get-email-address/${id}`,requestOptions)
  }
}
