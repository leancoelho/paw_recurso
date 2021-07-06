import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalModel } from '../model/local';
import { User } from '../model/user';

const endpoint = 'http://localhost:3000/api/v1/local';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class LocalRestServiceService {
  constructor(private http: HttpClient) {}

  createLocal(local: LocalModel): Observable<any> {
    return this.http.post<LocalModel>(endpoint + '/createLocal/'+ local.userID, local);
  }

  getAllLocals(): Observable<any> {
    return this.http.get<LocalModel[]>(endpoint + '/showAllLocals');
  }

  editLocal(local: LocalModel): Observable<any> {
    return this.http.put<LocalModel>(endpoint + '/edit/' + local._id, local);
  }

  getLocal(localID: string): Observable<any> {
    return this.http.get<LocalModel>(endpoint + '/showLocal/' + localID);
  }

  deleteLocal(id: string): Observable<any> {
    return this.http.delete<LocalModel>(endpoint + '/delete/' + id);
  }
  likeLocal(local: LocalModel, user: User): Observable<any> {
    return this.http.put<LocalModel>(endpoint + '/like/' + local._id + "/" + user.userName, local);
  }
  dislikeLocal(local: LocalModel, user: User): Observable<any> {
    return this.http.put<LocalModel>(endpoint + '/dislike/' + local._id + "/" + user.userName, local);
  }
}
