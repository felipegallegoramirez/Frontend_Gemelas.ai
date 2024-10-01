import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../models/user';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly apiUrl = environment.backend + 'auth'

  constructor( 
    private http: HttpClient
  ) { }

  auth(loginuser: LoginUser){
    return this.http.post<LoginUser>( this.apiUrl + '/', loginuser)
  }

}
