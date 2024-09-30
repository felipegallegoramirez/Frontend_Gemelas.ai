import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly apiUrl = environment.backend + 'user'

  constructor(private http: HttpClient) { }

  postUser(user: User){
    return this.http.post<User>(this.apiUrl + '/', user)
  }

}
