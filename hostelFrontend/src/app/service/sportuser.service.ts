import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "./helper";

@Injectable({
  providedIn: 'root'
})
export class SportuserService {

  constructor(private http:HttpClient) {
  }

  public viewSportlist()
  {
    return this.http.get(`${baseUrl}/ap1/v1/Sports_e`)
  }
}
