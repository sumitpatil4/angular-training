import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private _http:HttpClient) { }

  API_BASE_URL:string = "https://api.github.com/users/"

  getUserData(userName:string):Observable<any>{
    return this._http.get(this.API_BASE_URL+userName);
  }
}
