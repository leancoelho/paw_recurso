import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../model/login';
import { User } from '../model/user';


const endpoint = 'http://localhost:3000/api/v1/auth/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthRestServiceService {
  constructor(private http: HttpClient) {}

  login(userName: string, password: string): Observable<any> {
    return this.http.post<any>(
      endpoint + 'login',
      new LoginModel(userName, password)
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  register(user: User): Observable<any> {
    console.log('no serviço');
    console.log(user);
    return this.http.post<User>('http://localhost:3000/api/v1/registar', user);
  }

  save(user:User){
    return this.http.put<any>('http://localhost:3000/api/v1/users/userProfile/edit/' + user.userName, user);
 
  }
  delete(user:User): Observable<any> {
    return this.http.delete<User>('http://localhost:3000/api/v1/users/userProfile/deleteuser/' + user.userName);
  }

  getUser(userName: string): Observable<any> {
    return this.http.get<any>(
      'http://localhost:3000/api/v1/users/userProfile/' + userName
    );
  }


}